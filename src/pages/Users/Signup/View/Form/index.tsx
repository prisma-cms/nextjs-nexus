import React, { useCallback, useContext, useEffect, useMemo } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  UserSignupDataInput,
  useSignupMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
// import { FormStyled } from "src/components/ui/form/styles";

import { SignupFormStyled } from './styles'
import { Context } from 'src/pages/_App/Context'
import FormControl from '@prisma-cms/ui/dist/form/FormControl'

/**
 * Форма регистрации
 */
const SignupForm: React.FC = () => {
  const context = useContext(Context)

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<UserSignupDataInput> = yup
      .object({
        email: yup.string().email(),
        username: yup.string(),
        fullname: yup.string(),
        password: yup.string().required('Укажите пароль'),
        showEmail: yup.boolean().required(),
        showFullname: yup.boolean().required(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger } =
    useForm<UserSignupDataInput>({
      resolver: yupResolver(schema),
      shouldFocusError: true,
      /**
       * Устанавливаем режим ревалидации формы при изменении данных.
       * https://github.com/react-hook-form/react-hook-form/issues/2755#issuecomment-683268595
       */
      mode: 'onChange',
      defaultValues: {
        showEmail: false,
        showFullname: true,
      },
    })

  /**
   * При загрузке формы сразу вызываем валидацию формы,
   * чтобы показать обязательные поля
   */
  useEffect(() => {
    trigger()
  }, [trigger])

  /**
   * Хук регистрации
   */

  const [signupMutation, { loading: signupLoading }] = useSignupMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (signupLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    signupMutation({
      variables: {
        data,
      },
    })
      .then((r) => {
        if (r.data?.signup.data) {
          context?.onAuthSuccess(r.data.signup)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  /**
   * Рендерер поля
   */
  const usernameFieldRender: ControllerProps<
    UserSignupDataInput,
    'username'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="text"
        title="Логин"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const emailFieldRender: ControllerProps<
    UserSignupDataInput,
    'email'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="email"
        title="Емейл"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const fullnameFieldRender: ControllerProps<
    UserSignupDataInput,
    'fullname'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="text"
        title="ФИО"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const passwordFieldRender: ControllerProps<
    UserSignupDataInput,
    'password'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="password"
        title="Пароль"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const showEmailFieldRender: ControllerProps<
    UserSignupDataInput,
    'showEmail'
  >['render'] = useCallback(({ field }) => {
    return (
      <FormControl disabled={false} focused={false} className="flex-row">
        <>
          <input
            {...field}
            value={field.value ? 'true' : 'false'}
            type="checkbox"
          />{' '}
          <label>Показывать емейл другим пользователям</label>
        </>
      </FormControl>
    )
  }, [])

  const showFullnameFieldRender: ControllerProps<
    UserSignupDataInput,
    'showFullname'
  >['render'] = useCallback(({ field }) => {
    return (
      <FormControl disabled={false} focused={false} className="flex-row">
        <>
          <input
            {...field}
            value={field.value ? 'true' : 'false'}
            type="checkbox"
          />{' '}
          <label>Показывать ФИО другим пользователям</label>
        </>
      </FormControl>
    )
  }, [])

  return useMemo(() => {
    return (
      <>
        <SignupFormStyled onSubmit={onSubmit}>
          <h2>Зарегистрироваться</h2>

          <Controller
            name="username"
            control={control}
            render={usernameFieldRender}
          />

          <Controller
            name="email"
            control={control}
            render={emailFieldRender}
          />

          <Controller
            name="showEmail"
            control={control}
            render={showEmailFieldRender}
          />

          <Controller
            name="fullname"
            control={control}
            render={fullnameFieldRender}
          />

          <Controller
            name="showFullname"
            control={control}
            render={showFullnameFieldRender}
          />

          <Controller
            name="password"
            control={control}
            render={passwordFieldRender}
          />

          <Button
            type="submit"
            disabled={signupLoading || !formState.isValid}
            variant={formState.isValid ? 'success' : 'default'}
          >
            Зарегистрироваться
          </Button>
        </SignupFormStyled>
      </>
    )
  }, [
    control,
    emailFieldRender,
    formState.isValid,
    fullnameFieldRender,
    onSubmit,
    passwordFieldRender,
    showEmailFieldRender,
    showFullnameFieldRender,
    signupLoading,
    usernameFieldRender,
  ])
}

export default SignupForm
