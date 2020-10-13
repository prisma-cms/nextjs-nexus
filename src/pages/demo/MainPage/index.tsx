import { useRouter } from 'next/router'
import Head from 'next/head'

import { GetServerSideProps } from 'next'

import { initializeApollo } from 'src/lib/apolloClient'

import CommentsList, {
  allCommentsQueryDocument,
  allPostsQueryVars,
} from './CommentsList'

export const Home = (): JSX.Element => {
  const router = useRouter()

  const {
    query: { skip, first },
  } = router

  return (
    <>
      <Head>
        <title>Comments</title>
        <meta name="description" content="Comments from prisma-cms.com" />
      </Head>

      <CommentsList
        variables={{
          skip:
            skip && typeof skip === 'string'
              ? parseInt(skip)
              : allPostsQueryVars.skip,
          first:
            first && typeof first === 'string'
              ? parseInt(first)
              : allPostsQueryVars.first,
        }}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { skip, first } = context.query

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: allCommentsQueryDocument,
    variables: {
      ...allPostsQueryVars,
      skip:
        skip && typeof skip === 'string'
          ? parseInt(skip)
          : allPostsQueryVars.skip,
      first:
        first && typeof first === 'string'
          ? parseInt(first)
          : allPostsQueryVars.first,
    },
  })

  const initialApolloState = apolloClient.cache.extract()

  return {
    props: {
      initialApolloState,
    },
  }
}

export { allCommentsQueryDocument, allPostsQueryVars }

export default Home
