import { PhotosUploadFile } from './File'
import { PhotosUploadFileListStyled } from './styles'

type PhotosUploadFileListProps = {
  files: File[]
}

export const PhotosUploadFileList: React.FC<PhotosUploadFileListProps> = ({
  files,
}) => {
  return (
    <PhotosUploadFileListStyled>
      {files.map((n) => {
        return <PhotosUploadFile key={n.name} file={n} />
      })}
    </PhotosUploadFileListStyled>
  )
}
