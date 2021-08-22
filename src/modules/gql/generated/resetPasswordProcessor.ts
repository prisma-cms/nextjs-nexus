/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ResetPasswordProcessorMutationVariables = Types.Exact<{
  where: Types.ResetPasswordProcessorWhereInput;
}>;


export type ResetPasswordProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'AuthPayload', success: boolean, message?: Types.Maybe<string>, token?: Types.Maybe<string>, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> } };


export const ResetPasswordProcessorDocument = gql`
    mutation resetPasswordProcessor($where: ResetPasswordProcessorWhereInput!) {
  response: resetPasswordProcessor(where: $where) {
    success
    message
    errors {
      key
      message
    }
    token
    data {
      ...UserNoNesting
    }
  }
}
    ${UserNoNestingFragmentDoc}`;
export type ResetPasswordProcessorMutationFn = Apollo.MutationFunction<ResetPasswordProcessorMutation, ResetPasswordProcessorMutationVariables>;

/**
 * __useResetPasswordProcessorMutation__
 *
 * To run a mutation, you first call `useResetPasswordProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordProcessorMutation, { data, loading, error }] = useResetPasswordProcessorMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useResetPasswordProcessorMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordProcessorMutation, ResetPasswordProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordProcessorMutation, ResetPasswordProcessorMutationVariables>(ResetPasswordProcessorDocument, options);
      }
export type ResetPasswordProcessorMutationHookResult = ReturnType<typeof useResetPasswordProcessorMutation>;
export type ResetPasswordProcessorMutationResult = Apollo.MutationResult<ResetPasswordProcessorMutation>;
export type ResetPasswordProcessorMutationOptions = Apollo.BaseMutationOptions<ResetPasswordProcessorMutation, ResetPasswordProcessorMutationVariables>;