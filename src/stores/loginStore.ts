import { observable, action } from 'mobx';
import { ApolloClient, gql } from 'apollo-boost';
import get from 'lodash/get';

import { LoginResponse } from 'generated/graphql';

interface IAuthProvider<T> {
  isAuth: boolean;
  setAuthToken: (token: T) => void;
  setRefreshToken: (toke: T) => void;
}

const LoginUserQuery = gql`
  query($userName: String!, $password: String!) {
    loginUser(userName: $userName, password: $password) {
      token {
        refreshToken
        accessToken
      }
    }
  }
`;

class LoginStore {
  @observable public loading: boolean = false;
  @observable public error: Error | null = null;

  constructor(
    private appClient: ApolloClient<unknown>,
    private authStore: IAuthProvider<string>
  ) {}

  @action private setLoading = (val: boolean): void => {
    this.loading = val;
  };

  @action private setError = (error: Error | null): void => {
    this.error = error;
  };

  @action public handleLogin = async (userName: string, password: string) => {
    if (!this.authStore.isAuth) {
      this.setLoading(true);
      this.setError(null);

      try {
        const { data } = await this.appClient.query<{
          loginUser: LoginResponse;
        }>({
          query: LoginUserQuery,
          variables: { userName, password },
        });

        this.authStore.setAuthToken(get(data, 'loginUser.token.accessToken'));
        this.authStore.setRefreshToken(
          get(data, 'loginUser.token.refreshToken')
        );
        this.setLoading(false);
      } catch (e) {
        this.setError(e);
        this.setLoading(false);
      }
    }
  };
}

export default LoginStore;
