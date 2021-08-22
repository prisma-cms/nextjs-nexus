import { Prisma, ResetPassword, User } from '@prisma/client'
import moment from 'moment'
import { FieldResolver } from 'nexus'
import passwordGenerator from 'generate-password'
import { PrismaContext } from 'server/nexus/context'

export const createResetPasswordProcessor: FieldResolver<
  'Mutation',
  'createResetPasswordProcessor'
> = async (_, args, ctx) => {
  // let {
  //   data: {
  //     code,
  //     password,
  //     User,
  //     validTill,
  //     ...data
  //   },
  //   ...otherArgs
  // } = args;

  const where = args.where as Prisma.UserWhereUniqueInput

  const validTill = moment().add(1, 'hours')

  const code = passwordGenerator.generate({
    length: 6,
    uppercase: false,
    numbers: true,
  })

  const password = passwordGenerator.generate({
    length: 6,
    numbers: true,
    uppercase: false,
    symbols: false,
  })

  const user = await ctx.prisma.user
    .findUnique({
      where,
    })
    .catch(console.error)

  if (!user) {
    throw new Error('Не был получен пользователь')
  }

  // TODO По хорошему, в базу надо сохранять код и пароль сразу хешированные,
  // а не в чистом виде. Но надо логику тогда переделать, чтобы сразу письмо сформировать
  // с открытым кодом, и авторизацию пользователя переделать на бэке, чтобы можно было
  // создать сессию пользователя без передачи открытого пароля
  const createData: Prisma.ResetPasswordCreateInput = {
    code,
    password,
    validTill: validTill.toDate(),
    User_ResetPasswordToUser: {
      connect: {
        id: user.id,
      },
    },
  }

  const result = await ctx.prisma.resetPassword.create({
    data: createData,
  })

  /**
   * Если был создан код, надо его отправить пользователю
   */
  if (result) {
    const { id: resetPasswordId } = result

    const sends = await sendResetPasswordCode(result, user, ctx)

    /**
     * Если данные не были отправлены никаким образом,
     * удаляем запись и возвращаем ошибку
     */
    if (!sends.length) {
      await ctx.prisma.resetPassword
        .delete({
          where: {
            id: resetPasswordId,
          },
        })
        .catch(console.error)

      throw new Error('Не удалось отправить код. Попробуйте еще раз.')
    }
  }

  return {
    success: !!result,
    message: '',
    errors: [],
    data: result,
  }
}

async function sendResetPasswordCode(
  resetPassword: ResetPassword,
  user: User,
  ctx: PrismaContext
) {
  const sends = []

  const sendedViaEmail = await sendResetPasswordCodeViaEmail(
    resetPassword,
    user,
    ctx
  ).catch(console.error)

  if (sendedViaEmail) {
    sends.push('email')
  }

  // TODO Restore
  // const sendedViaSms = await sendResetPasswordCodeViaSms(resetPassword, user);

  // if (sendedViaSms) {
  //   sends.push("sms");
  // }

  return sends
}

async function sendResetPasswordCodeViaEmail(
  resetPassword: ResetPassword,
  user: User,
  ctx: PrismaContext
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let result = false

    const { id: userId, email } = user

    if (email && ctx.sendmail) {
      const { code } = resetPassword

      // Создаем новое сообщение
      // result = await ctx.prisma.letter.create({
      //   data: {
      //     email,
      //     subject: "Код для сброса пароля",
      //     message: `<h3>Кем-то был запрошен сброс пароля.</h3>
      //     <p>
      //       <strong>
      //         Внимание! Если это были не вы, ничего не делайте. Никому не сообщайте эти данные.
      //       </strong>
      //     </p>
      //     <p>
      //       ID пользователя: ${userId}
      //     </p>
      //     <p>
      //       Емейл: ${email}
      //     </p>
      //     <p>
      //       Код для сброса: ${code}
      //     </p>
      //   `,
      //   },
      // })
      //   .catch(console.error);

      ctx.sendmail(
        {
          to: email,
          subject: 'Код для сброса пароля',
          html: `<h3>Кем-то был запрошен сброс пароля.</h3>
            <p>
              <strong>
                Внимание! Если это были не вы, ничего не делайте. Никому не сообщайте эти данные.
              </strong>
            </p>
            <p>
              ID пользователя: ${userId}
            </p>
            <p>
              Емейл: ${email}
            </p>
            <p>
              Код для сброса: ${code}
            </p>
          `,
          from: ctx.mailSender,
        },
        (err?: Error | null) => {
          if (err) {
            // console.error(err)
            reject(err)
          } else {
            result = true
            resolve(result)
          }
        }
      )
    } else {
      return resolve(result)
    }
  })
}

// TODO Restore
// async function sendResetPasswordCodeViaSms(resetPassword, user) {

//   const {
//     ctx,
//     allowSendResetPasswordCodeViaSms,
//   } = this;

//   const {
//     db,
//   } = ctx;

//   let result;

//   if (allowSendResetPasswordCodeViaSms) {

//     const {
//       id: userId,
//       phone,
//     } = user;

//     if (phone) {

//       const {
//         code,
//       } = resetPassword;

//       const smsProcessor = new SmsMessageProcessor(ctx);

//       const smsArgs = {
//         data: {
//           from: "",
//           text: `Код для сброса пароля: ${code}`,
//           recipients: {
//             set: [phone],
//           },
//           Provider: {
//             connect: {
//               name: "LetsAds",
//             },
//           }
//         },
//       }

//       result = await smsProcessor.createAndSendSms("SmsMessage", smsArgs)
//         .catch(console.error);

//     }

//   }

//   return result;

// }
