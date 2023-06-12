import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import ResetPasswordPageView from './View'

export const ResetPasswordPage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <NextSeo title="Сброс пароля" noindex nofollow />

        <ResetPasswordPageView />
      </>
    )
  }, [])
}
