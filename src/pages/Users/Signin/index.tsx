import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import SigninPageView from './View'

/**
 * Страница регистрации
 */
const SigninPage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <NextSeo title="Авторизация" noindex nofollow />

        <SigninPageView />
      </>
    )
  }, [])
}

export default SigninPage
