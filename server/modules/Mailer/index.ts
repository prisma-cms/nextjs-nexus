import { PrismaContext } from 'server/nexus/context'
import fs from 'fs'
import { Letter, Prisma } from '.prisma/client'
import { Sendmail, SendmailProps } from './sendmail'
import Debug from 'debug'

const debug = Debug('NextjsNexus:Sendmail')

let sendmail: ReturnType<typeof Sendmail> | undefined

type startMailerProps = {
  /**
   * Пауза в мсек при отсутствии писем для отправки
   */
  delay: number
  mailSender: string
  footer?: string
  sendmailProps?: Partial<SendmailProps>
}

const mailerProps: startMailerProps = {
  delay: 60000,
  mailSender: 'no-reply@localhost',
}

/**
 * Запуск службы рассылки писем
 */
export const startMailer = (ctx: PrismaContext) => {
  debug('startMailer')

  if (process.env.SendmailSender) {
    mailerProps.mailSender = process.env.SendmailSender
  }

  if (process.env.SendmailQueueDelay) {
    mailerProps.delay = parseInt(process.env.SendmailQueueDelay)
  }

  const sendmailProps: SendmailProps = {
    silent: process.env.NODE_ENV !== 'development',
  }

  /**
   * Prod
   */
  if (process.env.SendmailSmtpHost) {
    sendmailProps.smtpHost = process.env.SendmailSmtpHost
  }

  if (process.env.SendmailSmtpPort) {
    sendmailProps.smtpPort = parseInt(process.env.SendmailSmtpPort)
  }

  /**
   * Dev
   */
  if (process.env.SendmailDevHost) {
    sendmailProps.devHost = process.env.SendmailDevPort
  }

  if (process.env.SendmailDevPort) {
    sendmailProps.devPort = parseInt(process.env.SendmailDevPort)
  }

  /**
   * DKIM
   */
  if (process.env.SendmailKeySelector && process.env.SendmailPrivateKeyFile) {
    sendmailProps.dkim = {
      keySelector: process.env.SendmailKeySelector,
      privateKey: fs.readFileSync(process.env.SendmailPrivateKeyFile, 'utf8'),
    }
  }

  sendmail = Sendmail(sendmailProps)

  sendLetters(ctx)
}

async function sendLetters(ctx: PrismaContext) {
  debug('sendLetters')

  const { delay } = mailerProps

  const letter = await ctx.prisma.letter.findFirst({
    where: {
      status: 'Created',
    },
    orderBy: {
      rank: 'desc',
    },
  })
  // .catch((error: Error) => {
  //   throw error;
  // });

  if (letter) {
    try {
      /**
       * Отправляем полученное письмо
       */
      await sendLetter(letter, ctx)
    } catch (error) {
      //
    }

    /**
     * Запускаем отправку писем дальше
     */
    sendLetters(ctx)
  } else {
    setTimeout(() => sendLetters(ctx), delay)
  }
}

async function sendLetter(letter: Letter, ctx: PrismaContext) {
  // console.log(console.log("sendLetter letter"), letter);

  const { id, email, subject, message, deleteOnSend, replyTo, returnTo } =
    letter

  await updateLetter(
    id,
    {
      status: 'Processing',
    },
    ctx
  )

  await sendEmail(
    email,
    subject,
    message,
    replyTo || undefined,
    returnTo || undefined
  )
    .then(async (r) => {
      await updateLetter(
        id,
        {
          status: 'Sended',
        },
        ctx
      )

      return r
    })
    .catch(async (error: Error) => {
      console.error(error)

      await updateLetter(
        id,
        {
          status: 'Error',
          errorMessage: error.stack,
        },
        ctx
      )
    })
  if (deleteOnSend) {
    await ctx.prisma.letter.delete({
      where: {
        id,
      },
    })
  }
}

async function updateLetter(
  id: string,
  data: Prisma.LetterUpdateInput,
  ctx: PrismaContext
) {
  return await ctx.prisma.letter.update({
    where: {
      id,
    },
    data,
  })
}

function sendEmail(
  to: string,
  subject: string,
  message: string,
  replyTo?: string,
  returnTo?: string
) {
  const {
    // sendmail,
    mailSender,
    footer = '',
  } = mailerProps

  // const host = process.env.HOST || "planner";

  return new Promise((resolve, reject) => {
    if (!sendmail) {
      return reject('sendmail is undefined')
    }

    sendmail(
      {
        from: mailSender,
        to,
        subject,
        html: `${message}
        <hr />
        ${footer}`,
        replyTo,
        returnTo,
      },
      function (error?: Error | null) {
        // console.dir(reply);
        if (error) {
          reject(error)
        } else {
          resolve(true)
        }
      }
    )
  })
}
