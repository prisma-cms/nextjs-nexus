import sharp, { Metadata, Sharp } from 'sharp'
import fs from 'fs'
import mime from 'mime-types'
import { RequestHandler } from 'express'

/**
 * Ресайз картинок
 */
export const imageResizerMiddleware: RequestHandler = async (
  req,
  res,
  _next
) => {
  // const {
  //   0: src,
  //   type,
  // } = req.params;

  let src: string | undefined
  let type: string | undefined

  let match: RegExpMatchArray | null | undefined

  //       '^/images/resized/([^/]+)/uploads/(.+)': '/images/$1/$2',
  //       '^/images/resized/([^/]+)/(.+)': '/images/$1/$2',
  //       '^/images/([^/]+)/uploads/(.+)': '/images/$1/$2',

  const srcPath = decodeURIComponent(req.originalUrl)

  if (
    (match = srcPath.match(/^\/images\/resized\/([^/]+)\/uploads\/(.+)/)) ||
    (match = srcPath.match(/^\/images\/resized\/([^/]+)\/(.+)/)) ||
    (match = srcPath.match(/^\/images\/([^/]+)\/uploads\/(.+)/))
  ) {
    src = match[2]
    type = match[1]
  }

  if (src && type) {
    const path = `/uploads/${src}`

    const abthPath = process.cwd() + path

    if (fs.existsSync(abthPath)) {
      const mimetype = mime.lookup(abthPath)

      const contentType = mimetype

      let data

      switch (contentType) {
        case 'image/svg+xml':
          break

        default: {
          const img = await sharp(abthPath)

          const metadata = await img.metadata()
          // .then(function (result) {

          //   metadata = result;

          // });

          data = await resizeImg(img, type, metadata)
            .then(async () => {
              if (!contentType) {
                res.status(500)
                res.send('Can not get contentType')
                return
              }

              return await img
                .withMetadata()
                .toBuffer()
                // .then(data => {

                //   res.status(200);
                //   res.contentType(contentType);
                //   res.send(data);

                // })
                .catch((e) => {
                  console.error(e)

                  res.status(500)
                  res.send(e.message)
                })
            })
            .catch((error) => {
              res.status(500)
              res.send(error.message)
            })

          if (!data) {
            return
          }
        }
      }

      if (data) {
        res.status(200)

        if (contentType && typeof contentType === 'string') {
          res.contentType(contentType)
        }
        res.append('Cache-Control', `public, max-age=${1000000}`)
        res.send(data)
      } else {
        res.append('Cache-Control', `public, max-age=${1000000}`)
        res.sendFile(abthPath)
      }

      return
    }
  }

  // Возвращаем код ответа
  res.status(404).send('File not found')

  // Можно отправлять обработку дальше, чтобы некст вывел нашу страницу 404,
  // Но это будем жрать много ресурсов, если запрашивается сразу много потерянных файлов
  // next()
}

async function resizeImg(img: Sharp, type: string, metadata: Metadata) {
  switch (type) {
    case 'origin':
      break

    case 'avatar':
      img.resize(200, 200)

      break

    case 'thumb':
      // DeprecationWarning: crop(position) is deprecated, use resize({ fit: "cover", position }) instead

      img
        // .resize(150, 150)
        // .crop(sharp.gravity.north);
        .resize({
          width: 150,
          height: 150,
          // fit: "fill",
          fit: 'cover',
          position: sharp.gravity.north,
        })

      break

    case 'small':
      img
        // .resize(200, 160)
        // // .resize({ fit: "inside" })
        // .resize({ fit: "cover" })
        // ;
        .resize({
          width: 200,
          height: 160,
          fit: 'inside',
          // position: sharp.gravity.north,
        })

      break

    case 'middle':
      img
        // .resize(700, 430)
        // .resize({ fit: "inside" })
        // .resize({ fit: "cover" });
        .resize({
          width: 700,
          height: 430,
          fit: 'inside',
          // position: sharp.gravity.north,
        })

      break

    case 'big':
      img.resize({ fit: 'inside' })

      resizeMax(img, 1200, 1000, metadata)

      break

    default:
      throw new Error('Wrong image type')
      return
  }

  return img
}

function resizeMax(
  img: Sharp,
  width: number,
  height: number,
  metadata: Metadata
) {
  const { width: originWidth, height: originHeight } = metadata

  if (
    originWidth &&
    originHeight &&
    (width < originWidth || height < originHeight)
  ) {
    img
      .resize({ fit: 'inside' })
      .resize(width, height)
      .resize({ fit: 'inside' })
  }
}

// function getContentType(metadata: Metadata) {

//   console.error("getContentType() deprecated");

//   let contentType;

//   const {
//     format,
//   } = metadata;

//   if (format) {
//     // throw new Error("Can not get format");
//     contentType = `image/${format}`
//   }

//   return contentType;
// }
