/* eslint-disable no-console */
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'
import { OperationDefinitionNode } from 'graphql'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  split,
} from '@apollo/client'

import { typePolicies } from './typePolicies'
import { createApolloClientProps } from './interfaces'

export * from './interfaces'

let wsLink: WebSocketLink | undefined

function getEndpoint() {
  let endpoint
  const origin = global.location?.origin

  if (origin && process.env.NODE_ENV !== 'test') {
    endpoint = `${origin}/api/`
  } else {
    // TODO fix for vercel.com

    // eslint-disable-next-line no-restricted-modules
    const os = require('os')
    const hostname = os.hostname()
    const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
    endpoint = `http://${hostname}:${PORT}/api/`
  }

  return endpoint
}

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

function createApolloClient({ withWs, appContext }: createApolloClientProps) {
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
      console.log(
        'createApolloClient appContext headers',
        appContext?.ctx.req?.headers
      )

      console.log('authMiddleware headers', headers)

      /**
       * Если заголовки отсутствуют и есть серверные заголовки, подставляем их.
       * Это надо для запросов в режиме SSR
       */
      if (!headers && appContext?.ctx.req?.headers) {
        headers = { ...appContext?.ctx.req?.headers }
      }

      console.log('authMiddleware headers 2', headers)

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

export default createApolloClient
