/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserFragment } from './user';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UserUniqueQueryVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type UserUniqueQuery = { __typename?: 'Query', user?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> };


export const UserUniqueDocument = gql`
    query UserUnique($where: UserWhereUniqueInput!) {
  user(where: $where) {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUserUniqueQuery__
 *
 * To run a query within a React component, call `useUserUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserUniqueQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserUniqueQuery(baseOptions: Apollo.QueryHookOptions<UserUniqueQuery, UserUniqueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserUniqueQuery, UserUniqueQueryVariables>(UserUniqueDocument, options);
      }
export function useUserUniqueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserUniqueQuery, UserUniqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserUniqueQuery, UserUniqueQueryVariables>(UserUniqueDocument, options);
        }
export type UserUniqueQueryHookResult = ReturnType<typeof useUserUniqueQuery>;
export type UserUniqueLazyQueryHookResult = ReturnType<typeof useUserUniqueLazyQuery>;
export type UserUniqueQueryResult = Apollo.QueryResult<UserUniqueQuery, UserUniqueQueryVariables>;