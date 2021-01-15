const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const webpack = (config, options) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config

  // console.log('config', config);

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
    test: /\.svg/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: 'file-loader',
        options: {
          limit: 1000,
          name: '[name]_[hash].[ext]',
          publicPath: `/_next/static/svg`,
          outputPath: 'static/svg',
        },
      },
    ],
  })

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
    test: /\.(png|jpe?g|gif)$/i,
    // loader: 'url-loader',
    issuer: {
      // nextjs already handles url() in css/sass/scss files
      test: /\.\w+(?<!(s?c|sa)ss)$/i,
    },
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

const config = withBundleAnalyzer({
  webpack,
})

module.exports = {
  ...config,
}
