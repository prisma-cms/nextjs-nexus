// import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

import { schema } from '../nexus'

import jwt from 'jsonwebtoken'
import { AuthTokenData } from 'server/nexus/types/User/resolvers'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'
import { permissions } from './permissions'
import { context, PrismaContext } from '../nexus/context'

export default new ApolloServer({
  // schema,
  schema: applyMiddleware(schema, permissions),

  // Run GraphQL playground in dev mode only
  playground: process.env.NODE_ENV === 'development',
  // playground: true,

  /**
   * Это теряет смысл, так как не позволяет выкидывать кастомные ошибки.
   * При этом в прод-режиме стек вырезается самим аполло-сервером, оставляя только текстовое сообщение.
   */
  // formatError(error) {
  //   if (process.env.NODE_ENV !== 'development') {
  //     console.error('GraphQL Error', error)
  //     return new Error('Internal server error')
  //   }

  //   return error
  // },
  context: async (requestContext): Promise<PrismaContext> => {
    let currentUser: PrismaContext['currentUser'] = null

    /**
     * Если есть токен, пытаемся получить текущего пользователя
     */
    if (requestContext.req.headers.authorization) {
      try {
        const token = requestContext.req.headers.authorization.replace(
          'Bearer ',
          ''
        )
        const tokenData = jwt.verify(
          token,
          context.APP_SECRET
        ) as AuthTokenData | null

        if (tokenData?.tokenId) {
          /**
           * Получаем токен
           */
          const Token = await context.prisma.token.findUnique({
            where: {
              id: tokenData.tokenId,
            },
            select: {
              id: true,
              expiredAt: true,

              /**
               * Включаем в выборку и данные пользователя
               */
              User: true,
            },
          })

          /**
           * Проверяем данные токена
           */
          if (
            Token &&
            (!Token.expiredAt || new Date(Token.expiredAt) > new Date())
          ) {
            /**
             * Если все ОК, возвращаем данные пользователя
             */
            currentUser = Token.User
          }
        }
      } catch (error) {
        // console.error(chalk.red("prisma-context getCurrentUser error"), error);
      }
    }

    return {
      // requestContext,
      // viewer,
      // headers,
      ...context,
      currentUser,
      express: requestContext,
    }
  },
})
