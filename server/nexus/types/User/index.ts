import { Prisma } from '@prisma/client'
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

    t.nonNull.int('usersCount', {
      description: 'Количество пользователей',
      args: {
        where: 'UserWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.user.count({
          where: args.where as Prisma.UserCountArgs['where'],
        })
      },
    })

    t.crud.user({
      description: 'Пользователь',
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
    t.string('username')
    t.string('email')
    t.string('fullname')
    t.string('password')
    t.nonNull.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
    })
    t.nonNull.boolean('showFullname', {
      description: 'Показывать ФИО другим пользователям',
    })
  },
})

export const UserSigninDataInput = inputObjectType({
  name: 'UserSigninDataInput',
  definition(t) {
    t.string('password')
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
      resolve(parent, _args, ctx) {
        return parent.showEmail === true ||
          ctx.currentUser?.sudo === true ||
          ctx.currentUser?.id === parent.id
          ? parent.email
          : null
      },
    })
    t.string('fullname', {
      resolve(parent, _args, ctx) {
        return parent.showFullname === true ||
          ctx.currentUser?.sudo === true ||
          ctx.currentUser?.id === parent.id
          ? parent.fullname
          : null
      },
    })
    t.string('username')
    t.boolean('sudo')
    t.nonNull.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
    })
    t.nonNull.boolean('showFullname', {
      description: 'Показывать ФИО другим пользователям',
    })
    t.string('image', {
      description: 'Avatar',
    })
  },
})
