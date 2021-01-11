import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

const Page404: Page = () => {
  return (
    <>
      <NextSeo noindex nofollow title="Page Not Found" description="" />
      <h2>404 - Page Not Found</h2>
    </>
  )
}

export default Page404
