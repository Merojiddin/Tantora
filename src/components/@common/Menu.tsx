import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NAV_ITEMS } from '@config/nav_items';

const Menu = observer(() => {
  const [t] = useTranslation('common');
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {NAV_ITEMS.map(({ label, link }) => (
        <Link to={link} key={label}>
          <ListItem
            className={classes.button}
            color="secondary"
            key={label}
            button={true}
          >
            <ListItemText primary={t(`header.${label}`)} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
});

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    marginRight: 25,
    fontSize: 38,

    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    color: theme.palette.common.white,
    minWidth: 'auto',
    marginRight: 10,
  },
}));

export default Menu;
