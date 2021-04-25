import React, { useCallback, useContext, useMemo } from 'react'

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

yup.setLocale({
  mixed: {
    default: 'Ошибка заполнения',
    required: 'Обязательное поле',
  },
  string: {
    required: 'Обязательное поле',
    email: 'Введите корректный емейл',
  },
})

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
        email: yup.string().email().required(),
        username: yup.string().required(),
        fullname: yup.string(),
        password: yup.string().required(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<UserSignupDataInput>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    reValidateMode: 'onBlur',
  })

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

  return useMemo(() => {
    return (
      <>
        <SignupFormStyled onSubmit={onSubmit}>
          <h2>Зарегистрироваться</h2>

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

          <Controller
            name="fullname"
            control={control}
            defaultValue={''}
            render={fullnameFieldRender}
          />

          <Controller
            name="password"
            control={control}
            defaultValue={''}
            render={passwordFieldRender}
          />

          <Button type="submit" disabled={signupLoading} variant="success">
            Зарегистрироваться
          </Button>
        </SignupFormStyled>
      </>
    )
  }, [
    control,
    emailFieldRender,
    fullnameFieldRender,
    onSubmit,
    passwordFieldRender,
    signupLoading,
    usernameFieldRender,
  ])
}

export default SignupForm
