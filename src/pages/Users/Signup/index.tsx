import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import SignupPageView from './View'

/**
 * Страница регистрации
 */
const SignupPage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <NextSeo title="Регистрация" noindex nofollow />

        <SignupPageView />
      </>
    )
  }, [])
}

export default SignupPage
