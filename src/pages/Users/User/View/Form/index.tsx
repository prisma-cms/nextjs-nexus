import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
// import Uploader, { UploadResponse } from '@prisma-cms/uploader'
import { UserEditFormProps } from './interfaces'
import {
  CurrentUserUpdateInput,
  useUpdateCurrentUserMutation,
} from 'src/modules/gql/generated'
import TextField from '@prisma-cms/ui/dist/form/TextField'
import { FormStyled } from 'src/components/ui/form/styles'
import Button from 'src/components/ui/Button'
import { NewPassword } from './Password'

export const UserEditForm: React.FC<UserEditFormProps> = ({ user }) => {
  const [data, dataSetter] = useState<CurrentUserUpdateInput>()

  const setData = useCallback(
    <T extends keyof CurrentUserUpdateInput>(
      name: T,
      value: CurrentUserUpdateInput[T]
    ) => {
      dataSetter({
        ...data,
        [name]: value,
      })
    },
    [data]
  )

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const value = event.target.value

      switch (name) {
        case 'fullname':
        case 'password':
          break

        default:
          return
      }

      setData(name, value)
    },
    [setData]
  )

  const resetData = useCallback(() => {
    dataSetter(undefined)
  }, [])

  const [mutation, { loading, client }] = useUpdateCurrentUserMutation({})

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      if (!data) {
        return
      }

      mutation({
        variables: {
          data,
        },
      })
        .then((result) => {
          if (result.data?.updateCurrentUser) {
            resetData()
            client.resetStore().catch(console.error)
          }
        })
        .catch(alert)
    },
    [client, data, mutation, resetData]
  )

  // TODO Пока убрал загрузку аватарки, потому что надо проработать бэк
  // const onUpload = useCallback((result: UploadResponse) => {
  //   console.log('result', result)

  //   setData('image', result.data.singleUpload?.path)
  // }, [setData])

  return (
    <>
      <FormStyled layout="column" onSubmit={onSubmit}>
        <TextField
          title="ФИО"
          name="fullname"
          value={data?.fullname ?? user.fullname ?? ''}
          onChange={onChange}
          fullWidth
        />

        <NewPassword value={data?.password ?? ''} onChange={onChange} />

        {/* <Uploader name="avatar" onUpload={onUpload} directory="images/" /> */}

        <div
          style={{
            display: 'inline-flex',
          }}
        >
          <Button type="button" disabled={!data || loading} onClick={resetData}>
            Отмена
          </Button>

          <Button
            disabled={!data || loading}
            variant={data ? 'success' : 'default'}
            type="submit"
          >
            Сохранить
          </Button>
        </div>
      </FormStyled>
    </>
  )
}
