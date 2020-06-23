import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import './style.scss';

import { User } from 'generated/graphql';

const USERS = gql`
  {
    users {
      userId
      userName
      firstName
      lastName
      email
      phone
    }
  }
`;

interface IResponse {
  users: User[];
}

const Users: FC = () => {
  const { loading, error, data } = useQuery<IResponse>(USERS);
  const classes = useStyles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <ul className="users__list">
        {data !== undefined &&
          data.users.map((user) => (
            <li key={user.userId!} className="users__item">
              <p>{user.userName}</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 128px)',
  },
}));

export default Users;
