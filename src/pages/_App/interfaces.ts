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
  initialApolloState?: any

  /**
   * Apollo-client API query result
   */
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
  Component: any
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
