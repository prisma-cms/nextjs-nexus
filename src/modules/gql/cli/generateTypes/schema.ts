import * as codegen from '@graphql-codegen/cli'
import path from 'path'
import { OUTPUT_PATH } from './constants'
import { endpoint } from 'src/config'

/** Функция генерирующая schema.json */
export const generateSchema = async () => {
  await codegen.generate(
    {
      schema: {
        [endpoint]: {
          headers: {
            Authorization: process.env.API_TOKEN ?? '',
          },
        },
      },
      generates: {
        [path.resolve(OUTPUT_PATH, 'schema.json')]: {
          plugins: [{ introspection: {} }],
        },
      },
    },
    true
  )
}
