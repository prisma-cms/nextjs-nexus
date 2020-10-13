/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentsConnectionCommentUserFragment } from './commentsConnectionCommentUser';
import { gql } from '@apollo/client';
import { CommentsConnectionCommentUserFragmentDoc } from './commentsConnectionCommentUser';
export type CommentsConnectionCommentFragment = { __typename?: 'Resource', id: string, createdAt: any, contentText?: Types.Maybe<string>, CreatedBy: (
    { __typename?: 'User' }
    & CommentsConnectionCommentUserFragment
  ) };

export const CommentsConnectionCommentFragmentDoc = gql`
    fragment commentsConnectionComment on Resource {
  id
  createdAt
  contentText
  CreatedBy {
    ...commentsConnectionCommentUser
  }
}
    ${CommentsConnectionCommentUserFragmentDoc}`;