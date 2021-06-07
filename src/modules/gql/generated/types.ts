/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: globalThis.Date;
  JSON: any;
};

/** Объект ответа мутации пользователя */
export interface AuthPayload {
  __typename?: 'AuthPayload';
  data?: Maybe<User>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}


export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}


export interface Mutation {
  __typename?: 'Mutation';
  /** Авторизация */
  signin: AuthPayload;
  /** Регистрация */
  signup: AuthPayload;
}


export type MutationSigninArgs = {
  data: UserSigninDataInput;
  where: UserWhereUniqueInput;
};


export type MutationSignupArgs = {
  data: UserSignupDataInput;
};

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  me?: Maybe<User>;
  /** Пользователь */
  user?: Maybe<User>;
  /** Список пользователей */
  users: Array<User>;
  /** Количество пользователей */
  usersCount: Scalars['Int'];
}


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<UserWhereInput>;
};

/** Объект ошибки */
export interface RequestError {
  __typename?: 'RequestError';
  key: Scalars['String'];
  message: Scalars['String'];
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export interface StringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface TokenListRelationFilter {
  every?: Maybe<TokenWhereInput>;
  none?: Maybe<TokenWhereInput>;
  some?: Maybe<TokenWhereInput>;
}

export interface TokenWhereInput {
  AND?: Maybe<Array<TokenWhereInput>>;
  NOT?: Maybe<Array<TokenWhereInput>>;
  OR?: Maybe<Array<TokenWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  expiredAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
}

/** Пользователь */
export interface User {
  __typename?: 'User';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  sudo?: Maybe<Scalars['Boolean']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
}

export interface UserOrderByInput {
  active?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullname?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  showEmail?: Maybe<SortOrder>;
  showFullname?: Maybe<SortOrder>;
  sudo?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
}

export interface UserSigninDataInput {
  password?: Maybe<Scalars['String']>;
}

export interface UserSignupDataInput {
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  username?: Maybe<Scalars['String']>;
}

export interface UserWhereInput {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  Tokens?: Maybe<TokenListRelationFilter>;
  active?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fullname?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  password?: Maybe<StringNullableFilter>;
  showEmail?: Maybe<BoolFilter>;
  showFullname?: Maybe<BoolFilter>;
  sudo?: Maybe<BoolFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringNullableFilter>;
}

export interface UserWhereUniqueInput {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}
