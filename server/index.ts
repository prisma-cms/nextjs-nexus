import express from 'express'
import next from 'next'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { endpoint } from './config'

const cwd = process.cwd()

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiProxy = createProxyMiddleware({
  target: endpoint,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api(/|$)': '/',
  },
  onError: (err, _req, res) => {
    console.error('apiProxy onError err', err)

    res.writeHead(500, {
      'Content-Type': 'text/plain',
    })
    res.end(
      'Something went wrong. And we are reporting a custom error message.'
    )
  },
  router: (req) => {
    if (!req.headers.referer && req.headers.host) {
      req.headers.referer = `http://${req.headers.host}`
    }

    return endpoint
  },
})

app.prepare().then(() => {
  const server = express()

  server.use(express.static(cwd + '/shared'))

  /**
   * PWA and other public generated files
   */
  server.use(express.static(cwd + '/.next/public'))

  /**
   * API requests
   */
  server.use('/api/', apiProxy)

  // Uncomment to serve storybook-static (before should run yarn build-storybook)
  // server.use('/storybook-static/', express.static('./storybook-static/'))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.info(`> Ready on http://localhost:${port}`)
  })
})
