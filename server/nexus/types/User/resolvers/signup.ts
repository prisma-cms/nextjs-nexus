import { FieldResolver } from 'nexus'
import { createPassword, createToken } from '.'

/**
 * Регистрация
 */
export const signup: FieldResolver<'Mutation', 'signup'> = async (
  _,
  args,
  ctx
) => {
  const { password: passwordProps, ...data } = args.data || {}

  if (!passwordProps) {
    throw new Error('Укажите пароль')
  }

  const password = await createPassword(passwordProps)

  const user = await ctx.prisma.user.create({
    data: {
      ...data,
      password,
    },
  })

  let token: string | undefined

  if (user) {
    token = await createToken(user, ctx)

    // Add request's context user for allow access to User object GraphqlShield rule
    ctx.currentUser = user
  }

  return {
    success: !!user,
    errors: [],
    data: user,
    token,
  }
}
