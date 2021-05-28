import DotEnv from 'dotenv'
DotEnv.config()

import express from 'express'
import next from 'next'
import graphqlServer from './graphqlServer'

const cwd = process.cwd()

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.static(cwd + '/shared'))

  graphqlServer.applyMiddleware({
    app: server,
    path: '/api',
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.info(`> Ready on http://localhost:${port}`)
  })
})
