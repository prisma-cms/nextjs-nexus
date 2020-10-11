import DotEnv from 'dotenv'

import { generateSchema } from './schema'
import { generateTypes } from './types'

/** Генерирует схему и index.ts */
export const generate = async () => {
  // ToDo: create global config
  DotEnv.config()

  await generateSchema()
  await generateTypes()
}
