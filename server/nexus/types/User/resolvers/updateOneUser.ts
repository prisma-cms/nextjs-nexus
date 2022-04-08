import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const updateOneUser: FieldResolver<'Mutation', 'updateOneUser'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser } = ctx

  const data = args.data
  const where = args.where as Prisma.UserUpdateArgs['where']

  if (!currentUser) {
    throw new Error('Необходимо авторизоваться')
  }

  if (!currentUser.sudo) {
    throw new Error('Access denied')
  }

  const updateData: Prisma.UserUpdateArgs['data'] = data

  return ctx.prisma.user.update({
    data: updateData,
    where,
  })
}
