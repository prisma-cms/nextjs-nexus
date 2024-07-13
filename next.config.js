// @ts-check

const webpack = (config, options) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config

  const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

  /**
   * Fix locales issue
   * https://github.com/moment/moment/issues/2517#issuecomment-620674018
   */
  config.plugins.push(
    new MomentLocalesPlugin({
      localesToKeep: ['ru', 'en'],
    })
  )

  config.module.rules.push({
    test: /\.pdf/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: 'file-loader',
        options: {
          limit: 1000,
          name: '[name]_[hash].[ext]',
          publicPath: `/_next/static/pdf`,
          outputPath: 'static/pdf',
        },
      },
    ],
  })

  config.resolve.fallback = {
    ...config.resolve.fallback,

    // https://freecode.academy/tasks/ckp9ahnondb4n0899d1cg5gwm
    os: require.resolve('os-browserify/browser'),
  }

  return config
}

/**
 *
 * @param {string} phase
 * @param {import('next').NextConfig} defaultConfig
 * @returns {import('next').NextConfig}
 */
module.exports = (phase, defaultConfig) => {
  defaultConfig = {
    ...defaultConfig,
    generateEtags: false,
    compiler: {
      styledComponents: true,
    },
  }

  if (phase !== 'phase-production-server') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })

    const withPWA = require('next-pwa')

    /**
     * @type {import('next').NextConfig}
     */
    let config = withBundleAnalyzer(
      withPWA({
        dest: `.next/public`,
        // TODO Пока не работает как хотелось бы
        // fallbacks: {
        //   // image: '/static/images/fallback.png',
        //   // document: '/offline',  // if you want to fallback to a custom    page other than /_offline
        //   // font: '/static/font/fallback.woff2',
        //   // audio: ...,
        //   // video: ...,
        // },

        disable:
          process.env.PWA !== 'true' || process.env.NODE_ENV === 'development',
      })
    )

    /**
     * Github pages
     */
    if (
      process.env.GITHUB_REPOSITORY &&
      ['phase-production-build', 'phase-export'].includes(phase)
    ) {
      const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1]

      config = {
        ...config,
        assetPrefix: `/${repositoryName}/`,
        basePath: `/${repositoryName}`,
      }
    }

    return config
  }

  // else
  // return defaultConfig

  return {
    ...defaultConfig,
    webpack,
    generateEtags: false,
  }
}
