import React, { useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import { UserEditForm } from './Form'
import { UserPageViewProps } from './interfaces'
import { UserPageViewStyled } from './styles'

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const currentUser = useCurrentUser()

  const editForm = useMemo(() => {
    if (currentUser?.id !== user.id) {
      return null
    }

    // else

    return <UserEditForm user={user} />
  }, [currentUser?.id, user])

  return (
    <UserPageViewStyled>
      <h2>{user.username}</h2>

      {editForm}
    </UserPageViewStyled>
  )
}
