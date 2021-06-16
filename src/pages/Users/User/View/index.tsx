import React, { useContext, useMemo } from 'react'
import { Context } from 'src/pages/_App/Context'
import { UserEditForm } from './Form'
import { UserPageViewProps } from './interfaces'
import { UserPageViewStyled } from './styles'

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const context = useContext(Context)

  const editForm = useMemo(() => {
    if (context?.user?.id !== user.id) {
      return null
    }

    // else

    return <UserEditForm user={user} />
  }, [context?.user?.id, user])

  return (
    <UserPageViewStyled>
      <h2>{user.username}</h2>

      {editForm}
    </UserPageViewStyled>
  )
}
