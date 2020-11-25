// import fs from 'fs';
import uniq from 'lodash/uniq'
import path from 'path'
import util from 'util'
import glob from 'glob'

import * as codegen from '@graphql-codegen/cli'
import { Types } from '@graphql-codegen/plugin-helpers'
import { TypeScriptPluginConfig } from '@graphql-codegen/typescript'
import { parse, ExecutableDefinitionNode } from 'graphql'

import {
  QUERIES_PATTERN,
  OUTPUT_PATH,
  PACKAGE_APP_FILE_PATH,
  TYPES_FILE_PATH,
  CREATE_REEXPORTS,
  APOLLO_HELPER_FILE_PATH,
} from './constants'

import { readFiles, clearOutputDirectory, writeFileIfChanged } from './files'

const scalars = {
  DateTime: 'globalThis.Date',
  Json: 'globalThis.Record<string, any> | globalThis.Array<any>',
  Long: 'number',
  Upload: 'globalThis.File',
}

const globPromisify = util.promisify(glob)

const prependText = [
  '/* eslint-disable */',
  '\n',
  '\n',
  '/** \n',
  '* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО \n',
  '* Команда для генерирования этого файла: "yarn generate:types" \n',
  '*/',
  '\n',
  '\n',
]

/** Функция получения списка путей файлов запросов с фронта */
async function getQueryFiles() {
  const files = uniq(await globPromisify(QUERIES_PATTERN))
  files.sort()
  return files
}

export const typescriptPluginConfig: TypeScriptPluginConfig = {
  onlyOperationTypes: false,
  namingConvention: {
    enumValues: 'upper-case#upperCase',
    typeNames: 'pascal-case#pascalCase',
  },
  scalars,
  declarationKind: {
    type: 'interface',
    input: 'interface',
  },
}

function createQueriesMap(filesMap: any) {
  let documentsString = ''
  for (const contents of filesMap.values()) {
    documentsString += contents + '\n'
  }

  const definitions = parse(documentsString).definitions

  const queriesAndFragments = definitions.filter(
    ({ kind }) =>
      kind === 'OperationDefinition' || kind === 'FragmentDefinition'
  ) as Array<ExecutableDefinitionNode>

  const queriesMap = new Map()
  queriesAndFragments.forEach((definition) => {
    if (definition.name && definition.loc) {
      const name = definition.name.value
      const oldText = queriesMap.get(name)
      if (!oldText) {
        queriesMap.set(
          name,
          documentsString.substring(definition.loc.start, definition.loc.end)
        )
      } else {
        const newText = documentsString.substring(
          definition.loc.start,
          definition.loc.end
        )
        if (
          oldText.replace(/\r/g, '').trim() !==
          newText.replace(/\r/g, '').trim()
        ) {
          throw new Error(`duplicate definitions ${name}`)
        }
      }
    }
  })
  return queriesMap
}

const typescriptConfig = {
  plugins: [
    {
      add: {
        content: prependText.join(''),
      },
    },
    'typescript',
  ],
  config: typescriptPluginConfig,
}

/**
 * Генерируем типы из schema.json
 */
async function generateTypesFromSchema() {
  const schema = path.join(OUTPUT_PATH, 'schema.json')

  await codegen.generate(
    {
      schema,
      generates: {
        [TYPES_FILE_PATH]: typescriptConfig,
        [APOLLO_HELPER_FILE_PATH]: {
          plugins: ['typescript-apollo-client-helpers'],
        },
      },
    },
    true
  )
}

/**
 * Функция генерирующая index.ts из Map с graphql файлами
 */
async function generateTypesFromMap() {
  const filesMap = await createInitialMap()

  /**
   * Ничего не делаем, если не были получены файлы
   */
  if (!filesMap.size) {
    return
  }

  const queriesMap = createQueriesMap(filesMap)

  function loaderFunction(name: string) {
    const query = parse(queriesMap.get(path.basename(name)))

    // console.log("loaderFunction query", query);
    return query
  }

  const loader = { loader: loaderFunction }

  const documents: any = {}

  for (const name of queriesMap.keys()) {
    documents[path.join(OUTPUT_PATH, name)] = loader
  }

  // console.log("documents", documents);

  const codegenConfig = {
    plugins: [
      {
        add: {
          content: prependText.join(''),
        },
      },
      'typescript-operations',
      'typescript-react-apollo',
      // "typescript-apollo-client-helpers",
    ],
    preset: 'near-operation-file',
    presetConfig: {
      extension: '.ts',
      baseTypesPath: './types.ts',
    },
    config: {
      withHOC: false,
      withHooks: true,
      withComponent: false,
      preResolveTypes: true,
      exportFragmentSpreadSubTypes: true,
    },
  }

  const config: TypeScriptPluginConfig = {
    scalars,
  }

  const input: Types.Config = {
    schema: path.join(OUTPUT_PATH, 'schema.json'),
    documents,
    config,
    generates: {
      types: codegenConfig,
    },
  }

  const generatedFiles = await codegen.generate(input, false)
  await Promise.all(
    generatedFiles.map(
      ({ filename, content }: { filename: string; content: string }) => {
        const updated = content.replace(
          /import \* as Types from '.*?';/g,
          `import * as Types from './types';`
        )
        return writeFileIfChanged(filename, updated)
      }
    )
  )

  if (CREATE_REEXPORTS) {
    await writeFileIfChanged(
      PACKAGE_APP_FILE_PATH,
      generatedFiles
        .map(
          ({ filename }: { filename: string }) =>
            `export * from './${path.basename(filename, '.ts')}';`
        )
        .join('\n') + "export * from './types';\n"
    )
  }
}

/** Функция создающая Map с graphql файлами
 * */
async function createInitialMap() {
  const queryFileNames = await getQueryFiles()
  const queryFileContents = await readFiles(queryFileNames)
  return new Map(
    queryFileNames.map((name, index) => [name, queryFileContents[index]])
  )
}

/** Функция создающая index.ts */
async function generateTypes() {
  // Очищаем директорию от сгенерированных ранее ts-файлов
  await clearOutputDirectory()

  // Генерируем типы от АПИ-схемы
  await generateTypesFromSchema()

  // Генерируем типы для фронтовых запросов
  await generateTypesFromMap()
}

export { generateTypes }
