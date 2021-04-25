/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { UserFragment } from './user';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user';
export type MeUserFragment = (
  { __typename?: 'User' }
  & UserFragment
);

export const MeUserFragmentDoc = gql`
    fragment meUser on User {
  ...user
}
    ${UserFragmentDoc}`;