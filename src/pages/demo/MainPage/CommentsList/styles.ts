import styled, { css } from 'styled-components'
import { UserAvatarProps, UserAvatarAlign } from './interfaces'

export const CommentsStyled = styled.div``

export const CommentStyled = styled.div`
  border-top: 1px solid grey;
  margin: 20px 0;
  padding: 20px 0;
`

export const CommentHeaderStyled = styled.div`
  display: flex;

  > {
    .createdBy {
      flex: 1;
    }
  }
`

const styles: { [key in UserAvatarAlign]: ReturnType<typeof css> } = {
  [UserAvatarAlign.Left]: css`
    margin-right: 6px;
  `,

  [UserAvatarAlign.Right]: css`
    margin-left: 6px;
  `,
}

/**
 * Аватар пользователя
 */
export const UserAvatarStyled = styled.div<UserAvatarProps>`
  background: ${({ url }) =>
    url
      ? `url("${
          /^https?:\/\//.test(url)
            ? url
            : `https://prisma-cms.com/images/resized/thumb/${url}`
        }")`
      : '#ddd'};
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #b1aeae;
  width: 40px;
  height: 40px;

  ${({ align }) => styles[align]}
`
