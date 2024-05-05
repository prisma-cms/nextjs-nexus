/* eslint-disable no-console */
import { useCallback, useState } from 'react'
import {
  PhotosUploadPageViewStyled,
  PhotosUploadPageViewToolbarStyled,
} from './styles'
import { PhotosUploadFileList } from './FileList'
import Button from 'src/components/ui/Button'
import { useSingleUploadMutation } from 'src/modules/gql/generated'

// type File = InputFil

export const PhotosUploadPageView: React.FC = () => {
  const [files, filesSetter] = useState<File[]>([])

  console.log('files', files)

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      console.log('onChange event', event)
      const newFiles = event.currentTarget.files

      if (newFiles) {
        filesSetter((files) => {
          const names = files.map((n) => n.name)

          return [
            ...files,
            ...Array.from(newFiles).filter((n) => !names.includes(n.name)),
          ]
        })
      }
    },
    []
  )

  const [uploadMutation, { loading: uploadLoading }] = useSingleUploadMutation()

  const onClickUpload = useCallback(() => {
    // const requests = files.map((n) =>
    //   uploadMutation({
    //     variables: {
    //       file: n,
    //     },
    //   })
    // )

    // Promise.allSettled(requests).then((result) => {
    //   console.log('Upload Result', result)

    //   return result
    // })

    const file = files.at(0)

    console.log('Upload file', file)

    if (file) {
      uploadMutation({
        variables: {
          data: {
            file,
          },
        },
      }).then((r: unknown) => {
        console.log('Upload r', r)
      })
    }
  }, [files, uploadMutation])

  return (
    <PhotosUploadPageViewStyled>
      <PhotosUploadPageViewToolbarStyled>
        <input
          type="file"
          multiple
          onChange={onChange}
          disabled={uploadLoading}
        />

        <Button
          variant="success"
          size="small"
          onClick={onClickUpload}
          disabled={uploadLoading || !files.length}
        >
          Upload
        </Button>
      </PhotosUploadPageViewToolbarStyled>

      <PhotosUploadFileList files={files} />
    </PhotosUploadPageViewStyled>
  )
}
