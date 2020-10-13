/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CommentsConnectionCommentUserFragment = { __typename?: 'User', id: string, username?: Types.Maybe<string>, fullname?: Types.Maybe<string>, image?: Types.Maybe<string> };

export const CommentsConnectionCommentUserFragmentDoc = gql`
    fragment commentsConnectionCommentUser on User {
  id
  username
  fullname
  image
}
    `;