import React from 'react'
import { UserPageViewProps } from './interfaces'
import { UserPageViewStyled } from './styles'

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  return (
    <UserPageViewStyled>
      <h2>{user.username}</h2>
    </UserPageViewStyled>
  )
}
