import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Page } from 'src/pages/_App/interfaces'
import {
  UserUniqueDocument,
  UserUniqueQuery,
  UserUniqueQueryVariables,
  useUserUniqueQuery,
} from 'src/modules/gql/generated'
import { UserPageView } from './View'
import { NextSeo } from 'next-seo'

export const UserPage: Page = () => {
  const router = useRouter()

  const id =
    router.query.id && typeof router.query.id === 'string'
      ? router.query.id
      : ''

  const data = useUserUniqueQuery({
    skip: !id,
    variables: {
      where: {
        id,
      },
    },
  })

  const user = data.data?.user

  return (
    <>
      <NextSeo title={user?.fullname || user?.username || 'User'} />

      {user ? <UserPageView user={user} /> : null}
    </>
  )
}

UserPage.getInitialProps = async ({ query, apolloClient }) => {
  const id = query.id && typeof query.id === 'string' ? query.id : ''

  const data = await apolloClient.query<
    UserUniqueQuery,
    UserUniqueQueryVariables
  >({
    query: UserUniqueDocument,
    variables: {
      where: {
        id,
      },
    },
  })

  return {
    statusCode: !data.data.user ? 404 : undefined,
  }
}
