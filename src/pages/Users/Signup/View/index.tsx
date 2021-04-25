import React, { useContext, useMemo } from 'react'

import { Context } from 'src/pages/_App/Context'
import SignupForm from './Form'

const SignupPageView: React.FC = () => {
  const context = useContext(Context)

  return useMemo(() => {
    /**
     * Если пользователя нет, то выводим форму регистрации
     */
    if (!context?.user) {
      return <SignupForm />
    }

    /**
     * Иначе информация о пользователе
     */
    return (
      <>
        <h3>Вы авторизованы как {context?.user.username}</h3>
      </>
    )
  }, [context?.user])
}

export default SignupPageView
