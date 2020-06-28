import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer }  from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import UserIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';

import useStore from 'hooks/useStore';

const FriendList: FC = observer(() => {
  const classes = useStyles();
  const { chatStore } = useStore();

  return (
    <div className={classes.container}>
      <Typography variant="h6" color="inherit">
        Recents
      </Typography>
      <List>
        {chatStore.recentChats.map(({ userName, userId }, idx) => (
          <Link
            key={userName}
            to={`/messages/${userName}/${userId}`}
            className={classes.link}
          >
            <ListItem key={userName}>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText>{userName}</ListItemText>
            </ListItem>
            {idx < chatStore.recentChats.length - 1 && <Divider />}
          </Link>
        ))}
      </List>
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: 300,
    minHeight: '100vh',
    padding: '90px 25px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    display: 'block',
    color: theme.palette.common.white,
    transition: '.3s',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

export default FriendList;
