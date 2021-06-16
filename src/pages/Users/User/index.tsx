import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Page } from 'src/pages/_App/interfaces'
import { useUserUniqueQuery } from 'src/modules/gql/generated'
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
