/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserNoNestingFragment = { __typename?: 'User', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, email?: Types.Maybe<string>, showEmail: boolean, username?: Types.Maybe<string>, fullname?: Types.Maybe<string>, showFullname: boolean, image?: Types.Maybe<string>, active: boolean, blocked: boolean };

export const UserNoNestingFragmentDoc = gql`
    fragment UserNoNesting on User {
  id
  createdAt
  updatedAt
  email
  showEmail
  username
  fullname
  showFullname
  image
  active
  blocked
}
    `;