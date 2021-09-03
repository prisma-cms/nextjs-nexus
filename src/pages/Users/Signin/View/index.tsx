import React, { useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

import SigninForm from './Form'

const SigninPageView: React.FC = () => {
  const currentUser = useCurrentUser()

  return useMemo(() => {
    /**
     * Если пользователя нет, то выводим форму регистрации
     */
    if (!currentUser) {
      return <SigninForm />
    }

    /**
     * Иначе информация о пользователе
     */
    return (
      <>
        <h3>Вы авторизованы как {currentUser.username}</h3>
      </>
    )
  }, [currentUser])
}

export default SigninPageView
