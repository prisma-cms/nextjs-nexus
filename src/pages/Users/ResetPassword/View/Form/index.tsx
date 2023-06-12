import React, { useCallback, useMemo, useState } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  CreateResetPasswordProcessorMutationVariables,
  useCreateResetPasswordProcessorMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'

import { ResetPasswordFormStyled } from './styles'
import { ResetPasswordCode, ResetPasswordCodeProps } from './ResetPasswordCode'

type FormData = Pick<
  CreateResetPasswordProcessorMutationVariables['where'],
  'username' | 'email'
>

/**
 * Форма регистрации
 */
const ResetePasswordForm: React.FC = () => {
  const [resetPasswordData, resetPasswordDataSetter] =
    useState<ResetPasswordCodeProps['data']>()

  const cancelResetPassword = useCallback(() => {
    resetPasswordDataSetter(undefined)
  }, [])

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<FormData> = yup
      .object({
        username: yup.string(),
        email: yup.string(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: 'onChange',
  })

  /**
   * Хук регистрации
   */

  const [mutation, { loading: signinLoading }] =
    useCreateResetPasswordProcessorMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (signinLoading) {
      return
    }

    const variables: CreateResetPasswordProcessorMutationVariables = {
      where: {
        email: data.email || undefined,
        username: data.username || undefined,
      },
    }

    /**
     * Выполняем запрос на сервер
     */
    mutation({
      variables,
    })
      .then((r) => {
        if (r.data?.response.success) {
          // context?.onAuthSuccess(r.data.response)
          resetPasswordDataSetter({
            where: variables.where,
          })
        } else {
          alert(r.data?.response.message || 'Ошибка авторизации')
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  /**
   * Рендерер поля
   */
  const usernameFieldRender: ControllerProps<FormData, 'username'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Логин"
          error={formState.errors[field.name]}
          {...field}
          value={field.value || ''}
          fullWidth
        />
      )
    }, [])

  const emailFieldRender: ControllerProps<FormData, 'email'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="email"
          title="или Емейл"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
          fullWidth
        />
      )
    }, [])

  return useMemo(() => {
    if (resetPasswordData !== undefined) {
      return (
        <ResetPasswordCode
          data={resetPasswordData}
          cancel={cancelResetPassword}
        />
      )
    }

    // else
    return (
      <ResetPasswordFormStyled
        role="signin"
        onSubmit={onSubmit}
        layout="column"
      >
        <h2>Восстановить пароль</h2>

        <Controller
          name="username"
          control={control}
          defaultValue={''}
          render={usernameFieldRender}
        />

        <Controller
          name="email"
          control={control}
          defaultValue={''}
          render={emailFieldRender}
        />

        <div
          style={{
            display: 'flex',
          }}
        >
          <Button
            size="small"
            type="submit"
            disabled={signinLoading}
            variant="success"
          >
            Выслать код
          </Button>
        </div>
      </ResetPasswordFormStyled>
    )
  }, [
    cancelResetPassword,
    control,
    emailFieldRender,
    onSubmit,
    resetPasswordData,
    signinLoading,
    usernameFieldRender,
  ])
}

export default ResetePasswordForm
