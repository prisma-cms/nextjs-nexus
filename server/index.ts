import express, { Response, Request } from 'express'
import next from 'next'
const { createProxyMiddleware } = require('http-proxy-middleware')

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPropxy = createProxyMiddleware({
  target:
    process.env.API_ENDPOINT ||
    'https://nextjs-graphql-with-prisma-simple.vercel.app/api',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api(/|$)': '/',
  },
  onError: (err: Error, _req: Request, res: Response) => {
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
