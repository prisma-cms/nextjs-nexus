import { rule } from 'graphql-shield'
import { PrismaContext } from 'server/nexus/context'

/**
 * Пользователь авторизован
 */
export const isAuthenticated = rule({ cache: 'contextual' })(
  (_parent, _args, ctx: PrismaContext) => {
    return Boolean(ctx.currentUser)
  }
)
