import { useEffect, useMemo, useState } from 'react'
import exifr from 'exifr'
import { PhotosUploadFileStyled } from './styles'
import { GpsOutput } from './interfaces'

/* eslint-disable no-console */
type PhotosUploadFileProps = {
  file: File
}

export const PhotosUploadFile: React.FC<PhotosUploadFileProps> = ({ file }) => {
  const src = useMemo(() => URL.createObjectURL(file), [file])

  console.log('src', src)

  const [ref, refSetter] = useState<HTMLImageElement | null>(null)

  const [gps, gpsSetter] = useState<GpsOutput>()

  console.log('gps', gps)

  useEffect(() => {
    if (!ref) {
      return
    }

    exifr.parse(file).then((info) => {
      console.log('info', info)
    })

    exifr.gps(file).then((gps: GpsOutput | undefined) => {
      console.log('gps then', gps)
      gpsSetter(gps)
    })
  }, [file, ref])

  return (
    <PhotosUploadFileStyled>
      <p>
        Name:
        {file.name}
      </p>
      <p>
        Size:
        {file.size}
      </p>

      <img src={src} ref={refSetter} />
    </PhotosUploadFileStyled>
  )
}
