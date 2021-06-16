import { NextSeo } from 'next-seo'
import React from 'react'
import { useUsersConnectionQuery } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { UsersPageView } from './View'

export const UsersPage: Page = () => {
  const data = useUsersConnectionQuery()

  return (
    <>
      <NextSeo title="Users" />

      <UsersPageView users={data.data?.users || []} />
    </>
  )
}
