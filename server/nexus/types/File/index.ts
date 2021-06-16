import { Prisma } from '@prisma/client'
import { objectType, extendType, inputObjectType, arg } from 'nexus'
import { singleUploadResolver } from './resolvers/singleUpload'

export const FileQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.files({
      description: 'Список файлов',
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('filesCount', {
      description: 'Количество файлов',
      args: {
        where: 'FileWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.file.count({
          where: args.where as Prisma.FileCountArgs['where'],
        })
      },
    })

    t.crud.file({
      description: 'Файл',
    })
  },
})

export const FileMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('singleUpload', {
      type: 'File',
      description: 'Загрузка файла',
      args: {
        file: arg({
          type: 'Upload',
          description: 'Устаревший параметр',
        }),
        data: 'SingleUploadInput',
      },
      resolve: singleUploadResolver,
    })
  },
})

export const SingleUploadInput = inputObjectType({
  name: 'SingleUploadInput',
  definition(t) {
    t.nonNull.field('file', {
      type: 'Upload',
    })
    t.string('name', {
      description: 'Пользовательское имя файла',
    })
    t.string('directory', {
      description: 'В какую директорю загружать файл',
    })
  },
})

// input SingleUploadInput {
//   file: Upload
//   name: String
//   directory: String
// }

export const File = objectType({
  name: 'File',
  description: 'Файл',
  sourceType: {
    module: '@prisma/client',
    export: 'File',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.nonNull.string('path', {
      description: 'Путь к файлу',
    })
    t.nonNull.string('filename', {
      description: 'Имя файла',
    })
    t.string('name', {
      description: 'Пользовательское имя файла',
    })
    t.nonNull.string('mimetype', {
      description: 'Миме-тип',
    })
    t.nonNull.string('encoding', {
      description: 'Кодировка',
    })
    t.nonNull.float('size', {
      description: 'Размер в байтах',
    })
    t.nonNull.int('rank', {
      description: 'Очередность',
    })
  },
})
