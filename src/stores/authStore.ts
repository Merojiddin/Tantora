import { ApolloClient, gql } from 'apollo-boost';
import { observable, computed, action } from 'mobx';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import { User, RefreshTokenResponse } from 'generated/graphql';

const MeQuery = gql`
  query {
    me {
      userId
      userName
      firstName
      lastName
      email
      phone
      dateOfBirth
      isActive
    }
  }
`;

const RefreshTokenMutation = gql`
  mutation($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token {
        accessToken
        refreshToken
      }
    }
  }
`;

const LOCAL_STORAGE_ENUMS = Object.freeze({
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
});

class AuthStore {
  @observable private _authToken: string;
  @observable private _refreshToken: string;
  @observable private _user: User | null = null;

  @computed public get isAuth(): boolean {
    return !isEmpty(this._authToken) && this.user !== null ? true : false;
  }

  @computed public get user(): User | null {
    return this._user;
  }

  @computed public get authToken(): string {
    const authToken =
      localStorage.getItem(LOCAL_STORAGE_ENUMS.AUTH_TOKEN) || '';

    return this._authToken || authToken;
  }

  @computed public get refreshToken(): string {
    const refreshToken =
      localStorage.getItem(LOCAL_STORAGE_ENUMS.REFRESH_TOKEN) || '';

    return this._refreshToken || refreshToken;
  }

  constructor(private appClient: ApolloClient<unknown>) {
    const authToken = localStorage.getItem(LOCAL_STORAGE_ENUMS.AUTH_TOKEN);
    const refreshToken = localStorage.getItem(
      LOCAL_STORAGE_ENUMS.REFRESH_TOKEN
    );

    this._authToken = authToken || '';
    this._refreshToken = refreshToken || '';
  }

  @action clear = () => {
    this._authToken = '';
    this._refreshToken = '';
    this._user = null;
    localStorage.removeItem(LOCAL_STORAGE_ENUMS.AUTH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_ENUMS.REFRESH_TOKEN);
  };

  @action public setAuthToken = (token: string): void => {
    localStorage.setItem(LOCAL_STORAGE_ENUMS.AUTH_TOKEN, token);
    this._authToken = token;
  };

  @action public setRefreshToken = (token: string): void => {
    localStorage.setItem(LOCAL_STORAGE_ENUMS.REFRESH_TOKEN, token);
    this._refreshToken = token;
  };

  @action public setUser = (user: User) => {
    this._user = user;
  };

  @action public fetchMe = async () => {
    if (this.refreshToken) {
      try {
        const {
          data: { me },
        } = await this.appClient.query<{ me: User }>({
          query: MeQuery,
        });

        this.setUser(me);
      } catch (err) {
        await this.refreshAccessToken();
        this.fetchMe();
      }
    } else {
      this.clear();
    }
  };

  @action public refreshAccessToken = async () => {
    if (this.refreshToken) {
      try {
        const { data } = await this.appClient.mutate<{
          refreshToken: RefreshTokenResponse;
        }>({
          mutation: RefreshTokenMutation,
          variables: {
            refreshToken: this.refreshToken,
          },
        });

        const accessToken = get(data, 'refreshToken.token.accessToken', null);
        const refreshToken = get(data, 'refreshToken.token.refreshToken', null);

        if (accessToken && refreshToken) {
          this.setAuthToken(accessToken);
          this.setRefreshToken(refreshToken);
        } else {
          this.clear();
        }
      } catch (err) {
        // need to handle this case
        this.clear();
      }
    }
  };
}

export default AuthStore;
