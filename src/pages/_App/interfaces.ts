import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { AppContext, AppInitialProps } from 'next/app'

/**
 * API apollo-client
 */
export type ApolloClientNormolized = ApolloClient<NormalizedCacheObject>

/**
 * Extended App context
 */
export interface NextPageContextCustom extends NextPageContext {
  /**
   * API apollo-client
   */
  apolloClient: ApolloClientNormolized
}

export interface PageProps extends React.PropsWithChildren<{}> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialApolloState?: any

  /**
   * Apollo-client API query result
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryResult?: any

  /**
   * Server-side status code
   */
  statusCode?: number
}

/**
 * Main App props
 */
export type AppProps = {
  Component: Page
  pageProps: PageProps
}

/**
 * Pages custom props
 */
export type Page<P extends PageProps = PageProps, IP = P> = NextComponentType<
  NextPageContextCustom,
  IP,
  P
>

/**
 * App custopm initial props
 */
export interface AppInitialPropsCustom extends AppInitialProps {
  pageProps: PageProps
}

/**
 * Custom App
 */
export type MainApp<P = AppProps> = React.FC<P> & {
  getInitialProps(context: AppContext): Promise<AppInitialPropsCustom>
}
