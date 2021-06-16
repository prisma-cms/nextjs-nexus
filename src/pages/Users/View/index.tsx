import React from 'react'
import Link from 'next/link'
import { UsersPageViewProps } from './interfaces'
import { UsersPageViewStyled } from './styles'

export const UsersPageView: React.FC<UsersPageViewProps> = ({ users }) => {
  return (
    <UsersPageViewStyled>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>fullname</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link href={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.username}</td>
                <td>{user.fullname}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </UsersPageViewStyled>
  )
}
