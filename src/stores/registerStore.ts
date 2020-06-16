import { observable, action } from 'mobx';
import { gql } from "apollo-boost";
import get from 'lodash/get';

import { CreateUserResponse } from 'generated/graphql';
import { RootStore } from 'stores/rootStore';
import AuthStore from 'stores/authStore';

export const ROLE_ENUM = Object.freeze({
  CLIENT: 'client',
  PRODUCER: 'producer',
  ORGANIZER: 'organizer',
});

interface IRegisterProps {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  role: string;
}

const CreateUserMutation = gql`
  mutation(
    $userName: String!
    $password: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String
    $dateOfBirth: String!
  ) {
    createUser(
      userName: $userName
      password: $password
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      dateOfBirth: $dateOfBirth
    ) {
      token {
        accessToken
      }
      user {
        userId
      }
    }
  }
`;

const AddToAdminsMutation = gql`
  mutation($userId: String!) {
    addToAdmins(userId: $userId) {
      status
    }
  }
`;

const AddToProducerMutation = gql`
  mutation($userId: String!) {
    addToProducer(userId: $userId) {
      status
    }
  }
`;

class RegisterStore {
  @observable public loading: boolean = false;
  @observable public error: Error | null = null;

  get authStore(): AuthStore {
    return this.rootStore.authStore;
  }

  constructor(private rootStore: RootStore) {}

  @action private setLoading = (val: boolean): void => {
    this.loading = val;
  }

  @action private setError = (error: Error | null): void => {
    this.error = error;
  }

  @action public handleRegister = async ({ role, ...variables }: IRegisterProps) => {
    if (!this.authStore.isAuth) {
      this.setLoading(true);
      this.setError(null);

      try {
        const { data } = await this.rootStore.appClient.mutate<{ createUser: CreateUserResponse }>({
          mutation: CreateUserMutation,
          variables,
        });

        this.authStore.setAuthToken(get(data, 'createUser.token.accessToken'));
        this.authStore.setRefreshToken(get(data, 'createUser.token.refreshToken'));
        const userId = get(data, 'createUser.user.userId');

        if (role === ROLE_ENUM.PRODUCER) {
          await this.rootStore.appClient.mutate({
            mutation: AddToProducerMutation,
            variables: { userId },
          });
        } else if (role === ROLE_ENUM.ORGANIZER) {
          await this.rootStore.appClient.mutate({
            mutation: AddToAdminsMutation,
            variables: { userId },
          });
        }

        this.setLoading(false);
      } catch (e) {
        this.setError(e);
        this.setLoading(false);
      }
    }
  }
}

export default RegisterStore;
