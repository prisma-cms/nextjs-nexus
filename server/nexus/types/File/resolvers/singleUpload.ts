import { FieldResolver } from 'nexus'
import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
import { PrismaContext } from 'server/nexus/context'
import { NexusGenArgTypes, NexusGenObjects } from 'server/nexus/generated/nexus'
import { Prisma } from '.prisma/client'

const { createWriteStream, unlink } = fs

/**
 * Запись файла на диск
 */

const storeFS = async ({
  stream,
  filename,
  directory,
}: {
  stream: fs.ReadStream
  filename: string | null | undefined
  directory: string | null | undefined
}): Promise<{
  path: string
}> => {
  const baseDir = 'uploads'

  const baseDirAbsolute = path.resolve(baseDir)

  // console.log("baseDirAbsolute", baseDirAbsolute);

  const uploadDir = path.join(baseDir, directory || '')

  // console.log("uploadDir", uploadDir);

  mkdirp.sync(uploadDir)

  // await mkdirp(uploadDir);

  // const id = shortid.generate()

  // const file = `${uploadDir}/${id}-${filename}`;

  const filenameUnique = `${new Date().getTime()}-${filename}`

  const filePath = path.join(uploadDir, filenameUnique)

  // console.log("baseDir", baseDir);

  // console.log("file path", filePath);

  const resolved = path.resolve(filePath)

  const normalized = path.normalize(resolved)

  // console.log("file path.resolve()", resolved);
  // console.log("file normalized", normalized);

  // console.log("file .relative()", path.relative(baseDir, normalized));

  if (!normalized.startsWith(baseDirAbsolute)) {
    throw new Error('Wrong directory')
  }

  // return;

  return new Promise((resolve, reject) => {
    // const storedFileUrl = new URL(storedFileName, UPLOAD_DIRECTORY_URL);
    const storedFileUrl = normalized
    // const storedFileUrl = new URL("test.png", uploadDir);

    // Create a stream to which the upload will be written.
    const writeStream = createWriteStream(storedFileUrl)

    // When the upload is fully written, resolve the promise.
    writeStream.on('finish', () => {
      resolve({
        path: filePath,
      })
    })
    // .on('close', () => {
    //   console.log("writeStream close");
    // })

    // If there's an error writing the file, remove the partially written file
    // and reject the promise.
    writeStream.on('error', (error) => {
      unlink(storedFileUrl, () => {
        reject(error)
      })
    })

    // In Node.js <= v13, errors are not automatically propagated between piped
    // streams. If there is an error receiving the upload, destroy the write
    // stream with the corresponding error.
    stream
      .on('error', (error) => {
        writeStream.destroy(error)
      })
      .pipe(writeStream)
  })
}

/**
 * Загрузка файла
 */
export const processUpload = async (
  args: NexusGenArgTypes['Mutation']['singleUpload'],
  ctx: PrismaContext
): Promise<NexusGenObjects['File']> => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Не был получен пользователь')
  }

  const { file: upload, directory, ...other } = args.data || {}

  if (!upload) {
    throw new Error('Can not get file')
  }

  const fileData = await upload.file
  const { createReadStream, filename, mimetype, encoding } = fileData

  const stream: fs.ReadStream = createReadStream()

  const writeResult = await storeFS({
    stream,
    filename,
    directory,
  }).catch((error) => {
    console.error('writeResult error', error)
  })

  const { path } = writeResult || {}

  if (path) {
    const stats = fs.statSync(path)

    const { size } = stats

    const uploaded: Prisma.FileCreateInput = {
      ...other,
      filename,
      mimetype,
      encoding,
      path: path.replace(/^\.\//, ''),
      size,
      CreatedBy: {
        connect: {
          id: currentUser.id,
        },
      },
    }

    // return ctx.db.mutation.createFile({
    //   data: uploaded,
    // }, info)
    //   .catch(error => {
    //     throw error;
    //   });
    return await ctx.prisma.file.create({
      data: uploaded,
    })
  } else {
    throw new Error(`Can not upload file ${filename}`)
  }
}

export const singleUploadResolver: FieldResolver<
  'Mutation',
  'singleUpload'
> = async (_, args, ctx) => {
  const result = await processUpload(args, ctx)

  return result
}
