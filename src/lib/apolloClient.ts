import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { concatPagination } from '@apollo/client/utilities'
import URI from 'urijs'
import fetch from 'cross-fetch'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  const uri = new URI()

  let origin = uri.origin()

  if (!origin) {
    const os = require('os')

    const hostname = os.hostname()

    const PORT = process.env.PORT || 3000

    origin = `http://${hostname}:${PORT}`
  }

  // const endpoint = 'https://nextjs-graphql-with-prisma-simple.vercel.app/api' || `${origin}/api/`
  const endpoint = `${origin}/api/`

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

  const httpLink = new HttpLink({
    fetch,
    uri: endpoint, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState?: any) {
  const _apolloClient = apolloClient ?? createApolloClient()
  // const _apolloClient = createApolloClient()

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

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
