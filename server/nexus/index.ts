import { makeSchema, asNexusMethod } from 'nexus'

import { GraphQLDateTime } from 'graphql-iso-date'
import { nexusPrisma } from 'nexus-plugin-prisma'

import * as types from './types'

export const DateTime = asNexusMethod(GraphQLDateTime, 'date', 'Date')

export const schema = makeSchema({
  /**
   * Надо будет перепроверить правильно ли использовать эти настройки
   */
  // shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  // shouldExitAfterGenerateArtifacts: process.env.NODE_ENV !== 'development',
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      // atomicOperations: true,

      /**
       * Это обязательно, иначе в аргументах будет first, который призма теперь не знает
       */
      paginationStrategy: 'prisma',

      outputs: {
        typegen: __dirname + '/generated/nexusPrisma.ts',
      },
    }),
  ],
  types: {
    ...types,
    DateTime,
  },
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'PrismaContext',
  },
  sourceTypes: {
    debug: process.env.NODE_ENV === 'development',
    modules: [],
  },
  prettierConfig:
    process.env.NODE_ENV === 'development'
      ? require.resolve(process.cwd() + '/.prettierrc')
      : undefined,
})
