/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type UserFragment = (
  { __typename?: 'User' }
  & UserNoNestingFragment
);

export const UserFragmentDoc = gql`
    fragment user on User {
  ...UserNoNesting
}
    ${UserNoNestingFragmentDoc}`;