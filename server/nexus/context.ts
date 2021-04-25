import { PrismaClient } from '@prisma/client'
import { NexusGenFieldTypes } from './generated/nexus'

if (!process.env.APP_SECRET) {
  throw new Error('APP_SECRET env is not defined')
}

const APP_SECRET = process.env.APP_SECRET

export interface PrismaContext {
  prisma: PrismaClient
  APP_SECRET: string

  // Authorized user
  currentUser: NexusGenFieldTypes['Query']['me']
}

const prisma = new PrismaClient()

export const context: PrismaContext = {
  prisma: prisma,
  APP_SECRET,
  currentUser: null,
}
