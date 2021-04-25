import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { signin, signup } from './resolvers'

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.users({
      description: 'Список пользователей',
      filtering: true,
      ordering: true,
    })

    t.field('me', {
      type: 'User',
      resolve(_, _args, ctx) {
        return ctx.currentUser
      },
    })
  },
})

export const UserSignupDataInput = inputObjectType({
  name: 'UserSignupDataInput',
  definition(t) {
    t.nonNull.string('username')
    t.nonNull.string('email')
    t.string('fullname')
    t.nonNull.string('password')
  },
})

export const UserSigninDataInput = inputObjectType({
  name: 'UserSigninDataInput',
  definition(t) {
    t.nonNull.string('password')
  },
})

export const AuthPayload = objectType({
  name: 'AuthPayload',
  description: 'Объект ответа мутации пользователя',
  definition(t) {
    t.nonNull.boolean('success')
    t.string('message')
    t.string('token')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'User',
    })
  },
})

export const UserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('signup', {
      description: 'Регистрация',
      type: 'AuthPayload',
      args: {
        data: nonNull('UserSignupDataInput'),
      },
      resolve: signup,
    })

    t.nonNull.field('signin', {
      description: 'Авторизация',
      type: 'AuthPayload',
      args: {
        where: nonNull('UserWhereUniqueInput'),
        data: nonNull('UserSigninDataInput'),
      },
      resolve: signin,
    })
  },
})

export const User = objectType({
  name: 'User',
  description: 'Пользователь',
  sourceType: {
    module: '@prisma/client',
    export: 'User',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.string('email', {
      resolve(parent) {
        parent
        return null
      },
    })
    t.string('username')
    t.boolean('sudo')
    t.string('fullname')
  },
})
