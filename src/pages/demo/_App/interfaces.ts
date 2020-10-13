import { NextPageContext } from 'next'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

/**
 * Расширенный контекст страниц приложения
 */
export interface NextPageContextCustom extends NextPageContext {
  /**
   * Аполло-клиент, чтобы в страницах и документе можно было
   * получить его в getInitialProps и вызвать запросы.
   * Надо именно так, чтобы иметь на выходе общий стейт клиента.
   */
  apolloClient: ApolloClientNormolized
}

/**
 * Свойства для основного приложения
 */
export type AppProps = {
  Component: any
  pageProps: any
}

/**
 * API-клиент
 */
export type ApolloClientNormolized = ApolloClient<NormalizedCacheObject>
