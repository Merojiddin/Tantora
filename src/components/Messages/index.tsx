import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';

import useStore from 'hooks/useStore';
import useSocket, { Socket } from 'hooks/useSocket';
import FriendList from 'components/Messages/FriendList';
import Message from 'components/Messages/Message';

const Messages = observer(() => {
  const socket = useSocket();
  const { authStore } = useStore();
  const [mainSocket, setMainSocket] = useState<Socket>();
  const classes = useStyles();

  useEffect(() => {
    if (!mainSocket && authStore.isAuth) {
      socket.connect();

      socket.io?.on('connect', () => {
        setMainSocket(socket);
      });
    }

    if (mainSocket !== undefined && authStore.isAuth) {
      mainSocket.io?.emit('get friends', authStore.user?.userId);
      mainSocket.io?.emit('get recent', authStore.user?.userId);
    }
  }, [mainSocket, socket, authStore.isAuth]);

  return (
    <div className={classes.container}>
      <FriendList />
      <Route
        exact={true}
        path="/messages/:username/:userid"
        component={() => <Message socket={mainSocket} />}
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
