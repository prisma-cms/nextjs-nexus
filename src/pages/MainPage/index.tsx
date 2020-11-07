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

export default MainPage
