import React, { useCallback, useMemo } from 'react'
import NextApp, { AppContext } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import { useApollo, initializeApollo } from 'src/lib/apolloClient'
import {
  AppProps,
  MainApp,
  AppInitialPropsCustom,
  NextPageContextCustom,
} from './interfaces'
import { NextSeo, NextSeoProps } from 'next-seo'
import * as yup from 'yup'

// TODO это для @prisma-cms/uploader
// Надо переделать его на useApollo и убрать этот контекст
import PrismaContext from '@prisma-cms/context'

import Page404 from '../_Error/404'
import ErrorPage from '../_Error'
import { GlobalStyle } from 'src/theme/GlobalStyle'
import { Context, ContextValue } from './Context'
import { useMeQuery } from 'src/modules/gql/generated'

const withWs = false

yup.setLocale({
  mixed: {
    default: 'Ошибка заполнения',
    required: 'Обязательное поле',
  },
  string: {
    required: 'Обязательное поле',
    email: 'Введите корректный емейл',
  },
})

const App: MainApp<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState, withWs)

  const { statusCode } = pageProps

  const onAuthSuccess: ContextValue['onAuthSuccess'] = useCallback(
    (data) => {
      /**
       * Устанавливаем значения хранилища
       */
      data.token && global.localStorage?.setItem('token', data.token)

      try {
        apolloClient.resetStore()
      } catch (error) {
        console.error(error)
      }
    },
    [apolloClient]
  )

  const { data: meQueryData } = useMeQuery({
    client: apolloClient,
  })

  const user = meQueryData?.me

  const context = useMemo<ContextValue>(() => {
    return {
      user,
      onAuthSuccess,
    }
  }, [user, onAuthSuccess])

  const content = useMemo(() => {
    const meta: NextSeoProps = {}

    let content = null

    /**
     * If got error code, show error page instead
     */
    if (statusCode && statusCode !== 200) {
      switch (statusCode) {
        case 404:
          meta.noindex = true
          meta.nofollow = true

          content = <Page404 {...pageProps} />

          break

        default:
          content = <ErrorPage statusCode={statusCode} {...pageProps} />
      }
    } else {
      /**
       * If OK, show page Component
       */
      content = <Component {...pageProps} />
    }

    return (
      <>
        <NextSeo {...meta} />
        {content}
      </>
    )
  }, [statusCode, pageProps, Component])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Context.Provider value={context}>
          <ApolloProvider client={apolloClient}>
            <PrismaContext.Provider
              value={{
                client: apolloClient,
              }}
            >
              {content}
            </PrismaContext.Provider>
          </ApolloProvider>
        </Context.Provider>
      </ThemeProvider>
    </>
  )
}

/**
 * This method calls both of back and front side.
 * Usefull for check access or/and data.
 * Add getInitialProps to page Component
 * and return {statusCode: 404} or {statusCode: 403} for example.
 */
App.getInitialProps = async (appContext: AppContext) => {
  /**
   * Initialize apollo-client and path into page props for collect
   * all data in cache.
   */
  const apolloClient = initializeApollo({
    withWs,
    appContext,
  })

  /**
   * Передаваемый далее в страницу контекст
   */
  const ctx: NextPageContextCustom = {
    ...appContext.ctx,
    apolloClient,
  }

  const newAppContext = {
    ...appContext,
    ctx,
  }

  /**
   * Call final _App.getInitialProps, _Document.getInitialProps() and page.getInitialProps()
   */
  const appProps = await NextApp.getInitialProps(newAppContext)

  const { pageProps, ...otherProps } = appProps

  const newProps: AppInitialPropsCustom = {
    ...otherProps,
    pageProps: {
      ...pageProps,
      initialApolloState: apolloClient.cache.extract(),
    },
  }

  /**
   * Got server statusCode
   */
  const { statusCode } = newProps.pageProps

  /**
   * If server-side, add response http code
   */
  if (statusCode && statusCode !== 200 && newAppContext.ctx.res) {
    newAppContext.ctx.res.statusCode = statusCode
  }

  return newProps
}

export default App
