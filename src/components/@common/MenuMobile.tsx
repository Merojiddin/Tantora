import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { NAV_ITEMS } from '@config/nav_items';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const Menu: FC<IProps> = observer(({ open, handleClose }) => {
  const classes = useStyles();
  const [t] = useTranslation('common');

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <div
          className={classes.list}
          role="presentation"
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <List>
            {NAV_ITEMS.map(({ label, link, icon }) => {
              return (
                <Link to={link} key={label}>
                  <ListItem
                    className={classes.navItem}
                    color="secondary"
                    key={label}
                    button={true}
                  >
                    <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                    <ListItemText primary={t(`header.${label}`)} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
          <Divider />
          <List className={classes.signBtnsWrapper}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button color="secondary">{t('header.register')}</Button>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: 'none' }}
              className={classes.signBtn}
            >
              <Button color="inherit">{t('header.sign-in')}</Button>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    height: '100%',
    backgroundColor: theme.palette.secondary.dark,
  },
  fullList: {
    width: 'auto',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  itemIcon: {
    height: 30,
    '& > img': {
      height: '100%',
      width: 'auto',
    },
  },
  signBtnsWrapper: {
    '&&': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  signBtn: {
    '&&': {
      color: theme.palette.common.white,
    },
  },
}));

export default Menu;
