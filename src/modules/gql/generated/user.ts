/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserFragment = { __typename?: 'User', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, email?: Types.Maybe<string>, showEmail: boolean, username?: Types.Maybe<string>, fullname?: Types.Maybe<string>, showFullname: boolean };

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  createdAt
  updatedAt
  email
  showEmail
  username
  fullname
  showFullname
}
    `;