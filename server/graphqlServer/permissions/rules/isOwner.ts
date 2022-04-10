import { rule } from 'graphql-shield'
import { PrismaContext } from 'server/nexus/context'
import { NexusGenScalars } from 'server/nexus/generated/nexus'

type WithCreatedBy = { createdById: NexusGenScalars['ID'] }

/**
 * Пользователь является владельцем объекта
 */
export const isOwner = <T extends WithCreatedBy>() => {
  return rule()((parent: T, _args, ctx: PrismaContext) => {
    /**
     * Сравниваем свойство объекта с id текущего пользователя
     */
    return ctx.currentUser && ctx.currentUser.id === parent.createdById
      ? true
      : false
  })
}
