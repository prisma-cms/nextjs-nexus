import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createPassword } from '.'

export const updateCurrentUser: FieldResolver<
  'Mutation',
  'updateCurrentUser'
> = async (_, args, ctx) => {
  const { currentUser } = ctx

  const { password: passwordProps, ...data } = args.data

  if (!currentUser) {
    throw new Error('Необходимо авторизоваться')
  }

  const updateData: Prisma.UserUpdateArgs['data'] = data

  if (passwordProps) {
    updateData.password = await createPassword(passwordProps)
  }

  return ctx.prisma.user.update({
    data: updateData,
    where: {
      id: currentUser.id,
    },
  })
}
