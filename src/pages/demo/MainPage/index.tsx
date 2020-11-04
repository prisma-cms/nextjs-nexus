import { useRouter } from 'next/router'
import Head from 'next/head'

import CommentsList, {
  allCommentsQueryDocument,
  allPostsQueryVars,
} from './CommentsList'
import { Page } from '../_App/interfaces'

export const Home: Page = () => {
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

Home.getInitialProps = async (context) => {
  const { apolloClient, query } = context

  const { skip, first } = query

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

  return {}
}

export default Home
