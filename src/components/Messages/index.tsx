import React from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';

import FriendList from 'components/Messages/FriendList';
import Message from 'components/Messages/Message';

const Messages = observer(() => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FriendList />
      <Route
        exact={true}
        path="/messages/:username/:userid"
        component={() => <Message />}
      />
    </div>
  );
});

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
  },
}));

export default Messages;
