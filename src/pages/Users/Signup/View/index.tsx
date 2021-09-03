import React, { useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

import SignupForm from './Form'

const SignupPageView: React.FC = () => {
  const currentUser = useCurrentUser()

  return useMemo(() => {
    /**
     * Если пользователя нет, то выводим форму регистрации
     */
    if (!currentUser) {
      return <SignupForm />
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

export default SignupPageView
