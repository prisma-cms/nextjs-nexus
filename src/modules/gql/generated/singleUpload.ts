/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { FileFragment } from './file';
import { gql } from '@apollo/client';
import { FileFragmentDoc } from './file';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SingleUploadMutationVariables = Types.Exact<{
  file?: Types.Maybe<Types.Scalars['Upload']>;
  data?: Types.Maybe<Types.SingleUploadInput>;
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload?: Types.Maybe<(
    { __typename?: 'File' }
    & FileFragment
  )> };


export const SingleUploadDocument = gql`
    mutation singleUpload($file: Upload, $data: SingleUploadInput) {
  singleUpload(file: $file, data: $data) {
    ...file
  }
}
    ${FileFragmentDoc}`;
export type SingleUploadMutationFn = Apollo.MutationFunction<SingleUploadMutation, SingleUploadMutationVariables>;

/**
 * __useSingleUploadMutation__
 *
 * To run a mutation, you first call `useSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singleUploadMutation, { data, loading, error }] = useSingleUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSingleUploadMutation(baseOptions?: Apollo.MutationHookOptions<SingleUploadMutation, SingleUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingleUploadMutation, SingleUploadMutationVariables>(SingleUploadDocument, options);
      }
export type SingleUploadMutationHookResult = ReturnType<typeof useSingleUploadMutation>;
export type SingleUploadMutationResult = Apollo.MutationResult<SingleUploadMutation>;
export type SingleUploadMutationOptions = Apollo.BaseMutationOptions<SingleUploadMutation, SingleUploadMutationVariables>;