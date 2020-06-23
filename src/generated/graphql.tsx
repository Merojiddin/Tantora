// import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type RootQuery = {
   __typename?: 'RootQuery';
  admins?: Maybe<Array<Maybe<User>>>;
  audience?: Maybe<Array<Maybe<User>>>;
  exhibitions?: Maybe<Array<Maybe<Exhibition>>>;
  loginUser?: Maybe<LoginResponse>;
  logout?: Maybe<LogoutResponse>;
  me?: Maybe<User>;
  producers?: Maybe<Array<Maybe<User>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type RootQueryExhibitionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryLoginUserArgs = {
  userName: Scalars['String'];
  password: Scalars['String'];
};


export type RootQueryLogoutArgs = {
  token: Scalars['String'];
};

export type Token = {
   __typename?: 'Token';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type RootMutation = {
   __typename?: 'RootMutation';
  addToAdmins?: Maybe<AddToAdminResponse>;
  addToProducer?: Maybe<AddToProducerResponse>;
  createExhibition?: Maybe<CreateExhibitionResponse>;
  createUser?: Maybe<CreateUserResponse>;
  refreshToken?: Maybe<RefreshTokenResponse>;
};


export type RootMutationAddToAdminsArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type RootMutationAddToProducerArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type RootMutationCreateExhibitionArgs = {
  startDate?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type RootMutationCreateUserArgs = {
  phone?: Maybe<Scalars['String']>;
  dateOfBirth: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  userName: Scalars['String'];
};


export type RootMutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type AddToProducerResponse = {
   __typename?: 'AddToProducerResponse';
  status?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
   __typename?: 'LoginResponse';
  token?: Maybe<Token>;
};

export type CreateUserResponse = {
   __typename?: 'CreateUserResponse';
  token?: Maybe<Token>;
  user?: Maybe<User>;
};

export type RefreshTokenResponse = {
   __typename?: 'RefreshTokenResponse';
  token?: Maybe<Token>;
};

export type CreateExhibitionResponse = {
   __typename?: 'CreateExhibitionResponse';
  status?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type Exhibition = {
   __typename?: 'Exhibition';
  createdDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  exhibitionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  startDate?: Maybe<Scalars['String']>;
};

export type AddToAdminResponse = {
   __typename?: 'AddToAdminResponse';
  status?: Maybe<Scalars['String']>;
};

export type LogoutResponse = {
   __typename?: 'LogoutResponse';
  deleted?: Maybe<Scalars['Int']>;
};

export type Unnamed_1_QueryVariables = {
  token: Scalars['String'];
};


export type Unnamed_1_Query = (
  { __typename?: 'RootQuery' }
  & { logout?: Maybe<(
    { __typename?: 'LogoutResponse' }
    & Pick<LogoutResponse, 'deleted'>
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'RootQuery' }
  & { admins?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'userName'>
  )>>> }
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = (
  { __typename?: 'RootQuery' }
  & { exhibitions?: Maybe<Array<Maybe<(
    { __typename?: 'Exhibition' }
    & Pick<Exhibition, 'exhibitionId' | 'name' | 'description' | 'startDate'>
  )>>> }
);

export type Unnamed_4_QueryVariables = {
  userName: Scalars['String'];
  password: Scalars['String'];
};


export type Unnamed_4_Query = (
  { __typename?: 'RootQuery' }
  & { loginUser?: Maybe<(
    { __typename?: 'LoginResponse' }
    & { token?: Maybe<(
      { __typename?: 'Token' }
      & Pick<Token, 'refreshToken' | 'accessToken'>
    )> }
  )> }
);

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = (
  { __typename?: 'RootQuery' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'userName' | 'firstName' | 'lastName' | 'email' | 'phone'>
  )>>> }
);

