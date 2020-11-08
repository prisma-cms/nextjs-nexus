import { NextSeo } from 'next-seo'

import { Page } from '../_App/interfaces'

export const MainPage: Page = () => {
  return (
    <>
      <NextSeo title="Main page" description="Main page description" />

      <div>Main Page</div>
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
