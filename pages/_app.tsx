import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'src/lib/apolloClient'

export type AppProps = {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
