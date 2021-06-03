import { PrismaClient, Token, User } from '@prisma/client'
import { ExpressContext } from 'apollo-server-express'
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
}

const prisma = new PrismaClient()

export const context: PrismaContext = {
  prisma: prisma,
  APP_SECRET,
  currentUser: null,
  express: null,
  Token: null,
}
