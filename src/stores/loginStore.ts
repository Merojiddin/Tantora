import { observable, action } from 'mobx';
import { gql } from 'apollo-boost';
import get from 'lodash/get';

import { LoginResponse } from 'generated/graphql';
import { RootStore } from 'stores/rootStore';
import AuthStore from 'stores/authStore';

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

  get authStore(): AuthStore {
    return this.rootStore.authStore;
  }

  constructor(private rootStore: RootStore) {}

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
        const { data } = await this.rootStore.appClient.query<{
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
