import { Page } from 'src/pages/_App/interfaces'
import { PhotosUploadPageView } from './View'
import { NextSeo } from 'next-seo'

export const PhotosUploadPage: Page = () => {
  return (
    <>
      <NextSeo title="Upload photos" nofollow noindex />

      <PhotosUploadPageView />
    </>
  )
}
