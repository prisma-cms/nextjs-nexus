import React from 'react'
import { NextSeo } from 'next-seo'
import NextError from 'next/error'
import { PageProps } from 'src/pages/_App/interfaces'

export default class ErrorPage extends NextError<PageProps> {
  render() {
    return (
      <div>
        <NextSeo noindex nofollow title="Server error" description="" />

        <h2>Server error</h2>
      </div>
    )
  }
}
