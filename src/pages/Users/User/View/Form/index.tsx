/* eslint-disable no-console */
import React, { useCallback } from 'react'
import Uploader, { UploadResponse } from '@prisma-cms/uploader'
import { UserEditFormProps } from './interfaces'

export const UserEditForm: React.FC<UserEditFormProps> = () => {
  const onUpload = useCallback((result: UploadResponse) => {
    console.log('result', result)
  }, [])

  return (
    <>
      <Uploader name="avatar" onUpload={onUpload} directory="images/" />
    </>
  )
}
