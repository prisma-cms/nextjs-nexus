import express from 'express'
import next from 'next'

import './config'
import graphqlServer from './graphqlServer'

import { graphqlUploadExpress } from 'graphql-upload'

const cwd = process.cwd()

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.static(cwd + '/shared'))

  // server.use('/uploads', express.static('/'))

  server.use('/uploads', (req, res) => {
    // res.sendFile(`${cwd}/node_modules/@prisma-cms/graphql-voyager/dist/voyager.worker.js`);

    // console.log('req', req);
    // console.log('req.url', req.url);

    // res.sendFile(cwd + "/uploads/" + req.url)
    res.sendFile(cwd + '/uploads/' + decodeURI(req.url))
    // res.sendFile(cwd + "/uploads/" + req.url)
  })

  /**
   * PWA and other public generated files
   */
  server.use(express.static(cwd + '/.next/public'))

  // server.use(
  //   '/api',
  //   graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  //   // graphqlHTTP({ schema })
  // )

  server.use(graphqlUploadExpress())

  /**
   * API requests
   */
  graphqlServer.applyMiddleware({
    app: server,
    path: '/api',
  })

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
