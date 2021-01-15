import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  from,
  split,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { OperationDefinitionNode } from 'graphql'

import { typePolicies } from './typePolicies'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function getEndpoint() {
  let endpoint
  const origin = global.location?.origin

  if (origin && process.env.NODE_ENV !== 'test') {
    endpoint = `${origin}/api/`
  } else {
    // TODO fix for vercel.com

    // const os = require('os')

    // const hostname = os.hostname()

    // const PORT = process.env.PORT || 3000

    // origin = `http://${hostname}:${PORT}`
    endpoint = process.env.API_ENDPOINT || 'https://api.prisma-cms.com'
  }

  return endpoint
}

let wsLink: WebSocketLink | undefined

let subscriptionClient: SubscriptionClient | undefined

/**
 * Создаем клиента отдельно,
 * потому что wsLink.subscriptionClient is private.
 * Нам этот клиент нужен, чтобы переподключаться при логине/логауте
 */
export function getSubscriptionClient() {
  if (typeof window === 'undefined') {
    return
  }

  if (!subscriptionClient) {
    const endpoint = getEndpoint()

    const wsUri = new URL(endpoint)

    let protocol = wsUri.protocol

    switch (protocol) {
      case 'http:':
        protocol = 'ws:'
        break

      case 'https:':
      default:
        protocol = 'wss:'
        break
    }

    wsUri.protocol = protocol

    /**
     * Создаем клиента отдельно,
     * потому что wsLink.subscriptionClient is private
     */
    subscriptionClient = new SubscriptionClient(wsUri.toString(), {
      reconnect: true,
      connectionParams: () => {
        const params: { Authorization?: string } = {}

        if (localStorage && localStorage.token) {
          params.Authorization = localStorage.token
        }

        return params
      },
    })
  }

  return subscriptionClient
}

/**
 * Хук для получения веб-сокет клиента.
 * Он нужен нам для сброса соединения при логине/логауте
 */
export function getWsLink() {
  /**
   * На стороне сервера нам не нужна поддержка веб-сокетов.
   * Подключаем вебсокеты только на стороне браузера.
   */
  if (typeof window === 'undefined') {
    return
  }

  /**
   * Если клиент уже существует, возвращаем его
   */

  if (wsLink) {
    return wsLink
  }

  const subscriptionClient = getSubscriptionClient()

  if (subscriptionClient) {
    wsLink = new WebSocketLink(subscriptionClient)
  }

  return wsLink
}

function createApolloClient(withWs: boolean) {
  const endpoint = getEndpoint()

  const errorLink = onError((error) => {
    const { graphQLErrors, networkError } = error

    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )

    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })

  const uploadLink = createUploadLink({
    uri: endpoint,
  })

  const httpLink = uploadLink

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers

    operation.setContext(({ headers }: { headers?: any }) => {
      const authorization =
        (global.localStorage && global.localStorage.getItem('token')) || null

      if (authorization) {
        headers = {
          ...headers,
          authorization,
        }
      }

      return {
        headers,
      }
    })

    return forward(operation)
  })

  let wsHttpLink: ApolloLink = httpLink

  const wsLink = withWs ? getWsLink() : undefined

  if (wsLink) {
    wsHttpLink = split(
      // split based on operation type
      (request) => {
        const { query } = request

        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  }

  // const link = concat(authMiddleware, httpLink)
  const link = errorLink.concat(wsHttpLink)

  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([
      authMiddleware,
      link,
      // uploadLink,
    ]),
    cache: new InMemoryCache({
      /**
       * Здесь можно прописать логику для отдельных полей объектов,
       * к примеру, объединение данных при выполнении подгрузки.
       */
      typePolicies,
    }),
  })

  return client
}

export function initializeApollo(initialState: any, withWs: boolean) {
  const _apolloClient = apolloClient ?? createApolloClient(withWs)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return _apolloClient
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any, withWs: boolean) {
  const store = useMemo(() => initializeApollo(initialState, withWs), [
    initialState,
    withWs,
  ])
  return store
}
