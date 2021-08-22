/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResetPasswordFragment } from './resetPassword';
import { gql } from '@apollo/client';
import { ResetPasswordFragmentDoc } from './resetPassword';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateResetPasswordProcessorMutationVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type CreateResetPasswordProcessorMutation = { __typename?: 'Mutation', response: { __typename: 'ResetPasswordResponse', success: boolean, message: string, errors: Array<{ __typename: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'ResetPassword' }
      & ResetPasswordFragment
    )> } };


export const CreateResetPasswordProcessorDocument = gql`
    mutation createResetPasswordProcessor($where: UserWhereUniqueInput!) {
  response: createResetPasswordProcessor(where: $where) {
    success
    message
    errors {
      key
      message
      __typename
    }
    data {
      ...resetPassword
    }
    __typename
  }
}
    ${ResetPasswordFragmentDoc}`;
export type CreateResetPasswordProcessorMutationFn = Apollo.MutationFunction<CreateResetPasswordProcessorMutation, CreateResetPasswordProcessorMutationVariables>;

/**
 * __useCreateResetPasswordProcessorMutation__
 *
 * To run a mutation, you first call `useCreateResetPasswordProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResetPasswordProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResetPasswordProcessorMutation, { data, loading, error }] = useCreateResetPasswordProcessorMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCreateResetPasswordProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateResetPasswordProcessorMutation, CreateResetPasswordProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateResetPasswordProcessorMutation, CreateResetPasswordProcessorMutationVariables>(CreateResetPasswordProcessorDocument, options);
      }
export type CreateResetPasswordProcessorMutationHookResult = ReturnType<typeof useCreateResetPasswordProcessorMutation>;
export type CreateResetPasswordProcessorMutationResult = Apollo.MutationResult<CreateResetPasswordProcessorMutation>;
export type CreateResetPasswordProcessorMutationOptions = Apollo.BaseMutationOptions<CreateResetPasswordProcessorMutation, CreateResetPasswordProcessorMutationVariables>;