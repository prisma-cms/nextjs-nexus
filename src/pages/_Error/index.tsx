import React from 'react'
import { NextSeo } from 'next-seo'
import NextError from 'next/error'

export default class ErrorPage extends NextError {
  render() {
    return (
      <div>
        <NextSeo noindex title="Server error" description="" />

        <h2>Server error</h2>
      </div>
    )
  }
}
