import { Prisma } from '@prisma/client'
import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { blockUser } from './resolvers/blockUser'
import { signin } from './resolvers/signin'
import { signup } from './resolvers/signup'
import { unblockUser } from './resolvers/unblockUser'
import { updateCurrentUser } from './resolvers/updateCurrentUser'
import { updateOneUser } from './resolvers/updateOneUser'

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
    t.nonNull.boolean('active', {
      description: 'Активирован ли пользователь',
    })
    t.nonNull.boolean('blocked', {
      description: 'Заблокирован ли пользователь',
    })
  },
})

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

export const UserExtendMutation = extendType({
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

    t.nonNull.field('blockUser', {
      type: 'User',
      description: 'Заблокировать пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
      },
      resolve: blockUser,
    })

    t.nonNull.field('unblockUser', {
      type: 'User',
      description: 'Разблокировать пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
      },
      resolve: unblockUser,
    })

    t.nonNull.field('updateOneUser', {
      type: 'User',
      description: 'Обновление пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
        data: nonNull('UserUpdateInput'),
      },
      resolve: updateOneUser,
    })

    t.nonNull.field('updateCurrentUser', {
      type: 'User',
      description: 'Обновление текущего пользователя',
      args: {
        data: nonNull('CurrentUserUpdateInput'),
      },
      resolve: updateCurrentUser,
    })
  },
})

export const UserSignupDataInput = inputObjectType({
  name: 'UserSignupDataInput',
  definition(t) {
    t.string('username')
    t.string('email')
    t.string('fullname')
    t.nonNull.string('password')
    t.nonNull.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
      default: false,
    })
    t.nonNull.boolean('showFullname', {
      description: 'Показывать ФИО другим пользователям',
      default: true,
    })
  },
})

export const UserSigninDataInput = inputObjectType({
  name: 'UserSigninDataInput',
  definition(t) {
    t.string('password')
  },
})

export const CurrentUserUpdateInput = inputObjectType({
  name: 'CurrentUserUpdateInput',
  definition(t) {
    t.string('username')
    t.string('fullname')
    t.string('password')
  },
})

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('username')
    t.string('fullname')
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
