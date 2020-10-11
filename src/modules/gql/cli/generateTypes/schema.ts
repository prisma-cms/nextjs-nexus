import * as codegen from '@graphql-codegen/cli'
import path from 'path'
import { OUTPUT_PATH } from './constants'

/** Функция генерирующая schema.json */
export const generateSchema = async () => {
  // ToDo: create getApiEndpoint method;
  const schema =
    process.env.API_ENDPOINT ||
    'https://nextjs-graphql-with-prisma-simple.vercel.app/api'

  await codegen.generate(
    {
      schema,
      generates: {
        [path.resolve(OUTPUT_PATH, 'schema.json')]: {
          plugins: [{ introspection: {} }],
        },
      },
    },
    true
  )
}
