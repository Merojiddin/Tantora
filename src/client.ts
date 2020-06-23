import ApolloClient from 'apollo-boost';

import env from '@config/env';

export const client = new ApolloClient({
  uri: env.backendUrl,
  request: (operation) => {
    const token = localStorage.getItem('authToken');

    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});
