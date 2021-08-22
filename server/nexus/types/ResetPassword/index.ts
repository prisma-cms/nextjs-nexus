import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { createResetPasswordProcessor } from './resolvers/createResetPasswordProcessor'
import { resetPasswordProcessor } from './resolvers/resetPasswordProcessor'

export const ResetPasswordExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createResetPasswordProcessor', {
      type: 'ResetPasswordResponse',
      args: {
        where: nonNull('UserWhereUniqueInput'),
      },
      resolve: createResetPasswordProcessor,
    })
    t.nonNull.field('resetPasswordProcessor', {
      type: 'AuthPayload',
      args: {
        data: nonNull('ResetPasswordInput'),
        where: nonNull('ResetPasswordWhereUniqueInput'),
      },
      resolve: resetPasswordProcessor,
    })
  },
})

export const ResetPassword = objectType({
  name: 'ResetPassword',
  sourceType: {
    module: '@prisma/client',
    export: 'ResetPassword',
  },
  definition(t) {
    t.nonNull.id('id')
  },
})

export const ResetPasswordResponse = objectType({
  name: 'ResetPasswordResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'ResetPassword',
    })
  },
})

export const ResetPasswordInput = inputObjectType({
  name: 'ResetPasswordInput',
  definition(t) {
    t.nonNull.id('code')
  },
})

export const ResetPasswordWhereUniqueInput = inputObjectType({
  name: 'ResetPasswordWhereUniqueInput',
  definition(t) {
    t.id('id')
  },
})
