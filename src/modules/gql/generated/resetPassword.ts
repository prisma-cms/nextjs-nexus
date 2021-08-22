/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ResetPasswordFragment = { __typename?: 'ResetPassword', id: string, foo?: Types.Maybe<string> };

export const ResetPasswordFragmentDoc = gql`
    fragment resetPassword on ResetPassword {
  id
  foo
}
    `;