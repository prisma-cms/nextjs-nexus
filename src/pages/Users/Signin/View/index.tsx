import React, { useMemo } from 'react'
import Button from 'src/components/ui/Button'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

import SigninForm from './Form'

const SigninPageView: React.FC = () => {
  const { user: currentUser, logout } = useCurrentUser()

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
        <Button onClick={logout}>Выйти</Button>
      </>
    )
  }, [currentUser, logout])
}

export default SigninPageView
