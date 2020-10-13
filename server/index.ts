import express from 'express'
import next from 'next'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { endpoint } from '../src/config'

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPropxy = createProxyMiddleware({
  target: endpoint,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api(/|$)': '/',
  },
  onError: (err, _req, res) => {
    console.error('apiPropxy onError err', err)

    res.writeHead(500, {
      'Content-Type': 'text/plain',
    })
    res.end(
      'Something went wrong. And we are reporting a custom error message.'
    )
  },
})

app.prepare().then(() => {
  const server = express()

  server.use('/api/', apiPropxy)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.info(`> Ready on http://localhost:${port}`)
  })
})
