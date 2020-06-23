import React, { FC } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';

import './style.scss';

import { User } from 'generated/graphql';
import useStore from 'hooks/useStore';
import Loading from 'components/@common/Loading';

const ADMIN = gql`
  {
    admins {
      userId
      userName
    }
  }
`;

interface IResponse {
  admins: User[];
}

const Admin: FC = observer(() => {
  const client = useApolloClient();
  const { authStore } = useStore();

  if (!authStore.isAuth) return <Redirect to="/" />;

  const { loading, error, data } = useQuery<IResponse>(ADMIN, { client });

  if (loading) return <Loading />;

  if (error) {
    return (
      <Typography color="error">
        Error occured during fetching admins: ${error}!
      </Typography>
    );
  }

  return (
    <div className="wrapper">
      <ul className="admins__list">
        {data !== undefined &&
          data.admins.map((admin) => (
            <li key={admin.userId!} className="admin__item">
              <p>{admin.userName}</p>
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Admin;
