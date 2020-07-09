import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import { Waypoint } from 'react-waypoint';
import cls from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { LogoutResponse } from 'generated/graphql';
import useStore from 'hooks/useStore';
import Languages from 'components/@common/Languages';
import Menu from 'components/@common/Menu';
import MenuMobile from 'components/@common/MenuMobile';
import Logo from 'assets/images/icon.png';

const LogoutQuery = gql`
  query($token: String!) {
    logout(token: $token) {
      deleted
    }
  }
`;

const Header = observer(() => {
  const [t] = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { authStore } = useStore();
  const client = useApolloClient();
  const classes = useStyles();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const handleLogout = async () => {
    try {
      await client.query<{ logout: LogoutResponse }>({
        query: LogoutQuery,
        variables: {
          token: authStore.authToken,
        },
      });
    } catch (error) {
      // handle error
    }

    client.resetStore();
    authStore.clear();
  };

  const handleToggleMenu = (open: boolean) => () => {
    setMenuOpen(open);
  };
  const handleEnter = () => {
    setActive(false);
  };
  const handleLeave = () => {
    setActive(true);
  };

  return (
    <>
      <Waypoint
        bottomOffset={-300}
        onEnter={handleEnter}
        onLeave={handleLeave}
      />
      <div className={classes.root}>
        <AppBar
          position="static"
          className={cls(classes.headerBar, { active })}
        >
          <div className={`${classes.headerBg} bg`} />
          {isTablet && (
            <MenuMobile open={menuOpen} handleClose={handleToggleMenu(false)} />
          )}
          <Toolbar className={classes.headerToolbar}>
            {isTablet && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="default"
                aria-label="menu"
                onClick={handleToggleMenu(true)}
              >
                <MenuIcon className={classes.whiteBtn} />
              </IconButton>
            )}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button>
                <Typography variant="h6" className={classes.whiteBtn}>
                  <img src={Logo} alt="Logo" className={classes.logo} />
                </Typography>
              </Button>
            </Link>
            {!isTablet && <Menu />}
            <div className={classes.loginWrapper}>
              <Languages />
              {authStore.isAuth ? (
                <Button className={classes.whiteBtn} onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Button className={classes.whiteBtn}>
                      {t('header.register')}
                    </Button>
                  </Link>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button className={classes.NotwhiteBtn}>
                      {t('header.sign-in')}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 250,
      alignContent: 'center',
      margin: 'auto',
    },
    headerBar: {
      position: 'relative',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      paddingTop: 22,

      '&.active': {
        '& > .bg': { opacity: 1 },
        paddingTop: 2,
      },

      '&:before': {
        content: `""`,
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
      },
    },
    headerBg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.common.darkBlue,
      opacity: 0,
      transition: '0.3s',
      minHeight: 50,
    },
    headerToolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: 1280,
      margin: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    whiteBtn: {
      color: theme.palette.common.white,
      fontSize: 14,
    },
    NotwhiteBtn: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.blue,
      fontSize: 14,
      padding: '10px 1px 12px',
      marginLeft: 28,
      width: 106,
      height: 38,
    },
    logo: {
      paddingTop: 5,
      width: 80,
      height: 65,
      boxSizing: 'border-box',
      backgroundSize: 'cover',
      position: 'relative',
    },
    loginWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});

export default Header;
