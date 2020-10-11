/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export interface Query {
  __typename?: 'Query';
  allUsers: Array<User>;
  _allUsersMeta: QueryMeta;
  User: User;
  allPosts: Array<Post>;
  _allPostsMeta: QueryMeta;
  Post: Post;
}


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderBy>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export interface UserOrderBy {
  firstName?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
}

export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc'
}

export interface User {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
}


export interface QueryMeta {
  __typename?: '_QueryMeta';
  count: Scalars['Int'];
}

export interface PostOrderBy {
  title?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  votes?: Maybe<OrderBy>;
}

export interface Post {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  url: Scalars['String'];
  votes: Scalars['Int'];
}

export interface Mutation {
  __typename?: 'Mutation';
  createPost: Post;
  votePost: Post;
}


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationVotePostArgs = {
  id: Scalars['String'];
};
