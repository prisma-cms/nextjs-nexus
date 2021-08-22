import { Prisma, ResetPassword, User } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import moment from 'moment'
import { FieldResolver } from 'nexus'
import { PrismaContext } from 'server/nexus/context'
import { NexusGenArgTypes } from 'server/nexus/generated/nexus'
import { createPassword } from '../../User/resolvers'
import { signin } from '../../User/resolvers/signin'

// TODO Надо переделать на свойства самого объекта ResetPassword
// то есть в таблице добавить колонку, чтобы там фиксировать информацию,
// что проверка кода запрошена, чтобы в том числе исключить процедуру проверки наличия пользователя.
const resetCodeQueue: Record<string, boolean> = {}

type ResetPasswordWithNested = ResetPassword & {
  User_ResetPasswordToUser: User
}

export const resetPasswordProcessor: FieldResolver<
  'Mutation',
  'resetPasswordProcessor'
> = async (_, args, ctx, info) => {
  // const where = args.where as Prisma.UserWhereUniqueInput;

  // const user = await ctx.prisma.user.findUnique({
  //   where,
  // })

  // if (!user) {
  //   throw new Error("Не был получен пользователь");
  // }

  // const userId = user.id;

  // return;

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const where = args.where as Prisma.ResetPasswordWhereUniqueInput

      const passwordReset = await ctx.prisma.resetPassword.findUnique({
        where,
        include: {
          User_ResetPasswordToUser: true,
        },
      })

      // passwordReset = passwordResets[0];

      if (!passwordReset) {
        throw new Error('Неправильный код')
      }

      /**
       * Проверка, чтобы на одного пользователя не сыпалось 100500 запросов на смену пользователя.
       * Защита от перебора
       */

      const resetCodeId = passwordReset.id

      if (resetCodeQueue[resetCodeId]) {
        throw new Error('Already in progress')
      }

      resetCodeQueue[resetCodeId] = true

      const result = await resetPasswordWithResponse(
        passwordReset,
        args,
        ctx,
        info
      )
        // .then(resolve)
        .catch(reject)

      /**
       * Удаляем флаг
       */
      delete resetCodeQueue[resetCodeId]

      if (!result) {
        return reject()
      }

      resolve(result)
      // resolve({
      //   success: !!result,
      //   message: "",
      //   errors: [],
      //   data: result,
      // })
    }, 3000)
  })
}

async function resetPasswordWithResponse(
  object: ResetPasswordWithNested,
  args: NexusGenArgTypes['Mutation']['resetPasswordProcessor'],
  ctx: PrismaContext,
  info: GraphQLResolveInfo
) {
  // const {
  //   where,
  //   data: {
  //     code,
  //     ...data
  //   },
  //   ...otherArgs
  // } = args;

  /**
   * Проверяем код
   */
  const valid: boolean = await validateResetPasswordCode(object, args, ctx)

  /**
   * Если код был получен, сбрасываем пароль пользователя
   */
  if (valid) {
    const updatedUser = await resetUserPassword(object, ctx)

    const { password } = object

    /**
     * Если пользователь был обновлен, авторизовываем пользователя
     */
    if (updatedUser) {
      const { id: userId } = updatedUser

      return await signin(
        {},
        {
          where: {
            id: userId,
          },
          data: {
            password,
          },
        },
        ctx,
        info
      )
    }
  }

  // return prepareResponse();
  return
}

async function validateResetPasswordCode(
  passwordReset: ResetPasswordWithNested,
  args: NexusGenArgTypes['Mutation']['resetPasswordProcessor'],
  ctx: PrismaContext
): Promise<boolean> {
  const {
    // where,
    data: {
      code,
      // ...data
    },
    // ...otherArgs
  } = args

  // const {
  //   ctx: {
  //     db,
  //   },
  // } = this;

  if (!code) {
    throw new Error('Не указан код')
  } else {
    // const query = `{
    //   id,
    //   code,
    //   password,
    //   validTill,
    //   User {
    //     id
    //   }
    // }`;

    // let passwordReset;

    const {
      id: passwordResetId,
      code: passwordResetCode,
      // password,
      validTill,
      // User: {
      //   id: userId,
      // }
    } = passwordReset

    /**
     * Проверяем срок действия пароля
     */

    // console.log(chalk.green("validTill"), moment(validTill).format(), moment().format(), moment(validTill) < moment());

    if (!validTill || moment(validTill) < moment()) {
      /**
       * Удаляем старый код
       */
      await ctx.prisma.resetPassword
        .delete({
          where: {
            id: passwordResetId,
          },
        })
        .catch(console.error)

      throw new Error('закончился срок действия кода')
    } else if (passwordResetCode !== code) {
      throw new Error('Неправильный код')
    } else {
      /**
       * Если все проверки пройдены, сбрасываем пароль и авторизуем пользователя
       */
      // return passwordReset;
      return true
    }
  }

  // return false;
}

async function resetUserPassword(
  passwordReset: ResetPasswordWithNested,
  ctx: PrismaContext
) {
  const {
    // id: passwordResetId,
    // code: passwordResetCode,
    password,
    // validTill,
    User_ResetPasswordToUser: { id: userId },
  } = passwordReset

  const updatedUser = await ctx.prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await createPassword(password),
      /**
       * Если пользователь был обновлен, удаляем запись сброса пароля.
       * Ошибку специально не обрабатываем, чтобы пользователь не был автоматически обновлен
       * и запросил новый пароль.
       */
      ResetPasswords: {
        deleteMany: {},
      },
    },
  })

  // await ctx.prisma.resetPassword.deleteMany({
  //   where: {
  //     // id: passwordResetId,
  //     User: {
  //       id: userId,
  //     },
  //   },
  // });

  return updatedUser
}
