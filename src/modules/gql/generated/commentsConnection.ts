/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentsConnectionCommentFragment } from './commentsConnectionComment';
import { gql } from '@apollo/client';
import { CommentsConnectionCommentFragmentDoc } from './commentsConnectionComment';
import * as Apollo from '@apollo/client';
export type CommentsConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  orderBy?: Types.Maybe<Types.ResourceOrderByInput>;
}>;


export type CommentsConnectionQuery = { __typename?: 'Query', commentsConnection: { __typename?: 'ResourceConnection', edges: Array<Types.Maybe<{ __typename?: 'ResourceEdge', node: (
        { __typename?: 'Resource' }
        & CommentsConnectionCommentFragment
      ) }>>, aggregate: { __typename?: 'AggregateResource', count: number } } };


export const CommentsConnectionDocument = gql`
    query commentsConnection($first: Int = 10, $skip: Int = 0, $orderBy: ResourceOrderByInput = createdAt_DESC) {
  commentsConnection: resourcesConnection(where: {type: Comment}, first: $first, skip: $skip, orderBy: $orderBy) {
    edges {
      node {
        ...commentsConnectionComment
      }
    }
    aggregate {
      count
    }
  }
}
    ${CommentsConnectionCommentFragmentDoc}`;

/**
 * __useCommentsConnectionQuery__
 *
 * To run a query within a React component, call `useCommentsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCommentsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
        return Apollo.useQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, baseOptions);
      }
export function useCommentsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
          return Apollo.useLazyQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, baseOptions);
        }
export type CommentsConnectionQueryHookResult = ReturnType<typeof useCommentsConnectionQuery>;
export type CommentsConnectionLazyQueryHookResult = ReturnType<typeof useCommentsConnectionLazyQuery>;
export type CommentsConnectionQueryResult = Apollo.QueryResult<CommentsConnectionQuery, CommentsConnectionQueryVariables>;