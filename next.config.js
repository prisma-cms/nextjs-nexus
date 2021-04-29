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

  // https://github.com/vercel/next.js/issues/11164#issuecomment-602204795
  config.module.rules.push({
    // test: /\.(png|jpe?g|gif)$/i,
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
    // loader: 'url-loader',
    // issuer: {
    //   // nextjs already handles url() in css/sass/scss files
    //   test: /\.\w+(?<!(s?c|sa)ss)$/i,
    // },
    use: [
      {
        loader: 'url-loader',
        options: {
          context: 'src',
          name() {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]'
            }

            return '[contenthash].[ext]'
          },
          publicPath: `/_next/static/media`,
          outputPath: 'static/media',
          limit: 1000,
        },
      },
    ],
  })

  // Object.assign(config, {
  //   // https://nextjs.org/docs/api-reference/next.config.js/disabling-etag-generation
  //   generateEtags: false,
  // });

  return config

  // Important: return the modified config
  // return {
  //   ...config,

  //   // https://nextjs.org/docs/api-reference/next.config.js/disabling-etag-generation
  //   generateEtags: false,
  // }
}

module.exports = (phase, defaultConfig) => {
  if (phase !== 'phase-production-server') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })

    const withPWA = require('next-pwa')

    const config = withBundleAnalyzer({
      ...withPWA({
        pwa: {
          dest: `.next/public`,
          // TODO Пока не работает как хотелось бы
          // fallbacks: {
          //   // image: '/static/images/fallback.png',
          //   // document: '/offline',  // if you want to fallback to a custom    page other than /_offline
          //   // font: '/static/font/fallback.woff2',
          //   // audio: ...,
          //   // video: ...,
          // },

          disable: process.env.NODE_ENV === 'development',
        },
        webpack,

        // https://github.com/shadowwalker/next-pwa/issues/198#issuecomment-817205700
        future: {
          webpack5: true,
        },
      }),
    })
    return config
  }

  // else
  return defaultConfig
}
