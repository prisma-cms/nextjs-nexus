import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import bcrypt from 'bcryptjs'

import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { createToken } from '.'

/**
 * Авторизация
 */
export const signin: FieldResolver<'Mutation', 'signin'> = async (
  _,
  args,
  ctx
) => {
  const { password } = args.data || {}

  if (!password) {
    throw new Error('Не указан пароль')
  }

  const where = args.where as Prisma.UserWhereUniqueInput

  const user = await ctx.prisma.user.findUnique({
    where,
  })

  let success = false
  let message = ''
  let result: NexusGenObjects['User'] | null = null
  let token: string | undefined

  if (!user) {
    message = 'Не был получен пользователь'
  } else if (user.blocked) {
    throw new Error('User blocked')
  } else if (
    !user.password ||
    !(await bcrypt.compare(password, user.password))
  ) {
    message = 'Неправильный пароль'
  } else {
    success = true
    result = user

    token = await createToken(user, ctx)
  }

  return {
    success,
    message,
    errors: [],
    token,
    data: result,
  }
}
