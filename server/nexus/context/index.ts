import { PrismaClient, Token, User } from '@prisma/client'
import { ExpressContext } from 'apollo-server-express'
import fs from 'fs'
import { Sendmail, SendmailProps } from '../../modules/Mailer/sendmail'
import { NexusGenFieldTypes } from '../generated/nexus'

if (!process.env.APP_SECRET) {
  throw new Error('APP_SECRET env is not defined')
}

const APP_SECRET = process.env.APP_SECRET

export interface PrismaContext {
  prisma: PrismaClient
  APP_SECRET: string

  // Authorized user
  currentUser: NexusGenFieldTypes['Query']['me']

  express: ExpressContext | null

  /**
   * Токен авторизации
   */
  Token: (Token & { User: User | null }) | null

  sendmail: ReturnType<typeof Sendmail> | undefined
  mailSender: string
}

const prisma = new PrismaClient()

/**
 * Sendmail
 */

let sendmail: PrismaContext['sendmail']

if (process.env.Sendmail === 'true') {
  const sendmailProps: SendmailProps = {
    silent: process.env.NODE_ENV !== 'development',
  }

  /**
   * prod
   */
  if (process.env.SendmailSmtpHost) {
    sendmailProps.smtpHost = process.env.SendmailSmtpHost
  }

  if (process.env.SendmailSmtpPort) {
    sendmailProps.smtpPort = parseInt(process.env.SendmailSmtpPort)
  }

  /**
   * dev
   */
  if (process.env.SendmailDevHost) {
    sendmailProps.devHost = process.env.SendmailDevHost
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
}

/**
 * Eof Sendmail
 */

export const context: PrismaContext = {
  prisma: prisma,
  APP_SECRET,
  currentUser: null,
  express: null,
  Token: null,
  sendmail,
  mailSender: process.env.SendmailSender || 'no-reply@localhost',
}
