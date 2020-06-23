import React, { useState, ChangeEventHandler } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VpnKey from '@material-ui/icons/VpnKey';
import { observer } from 'mobx-react-lite';

import useStore from 'hooks/useStore';
import Loading from 'components/@common/Loading';

const Login = observer(() => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authStore, loginStore } = useStore();
  const classes = useStyles();

  const handleRegister = () => {
    loginStore.handleLogin(userName, password);
  };

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container className={classes.container}>
      {authStore.isAuth && <Redirect to="/" />}
      <form className={classes.form}>
        {!loginStore.loading ? (
          <Typography className={classes.title} variant="h4" color="secondary">
            <VpnKey /> Login
          </Typography>
        ) : (
          <Loading />
        )}
        <TextField
          label="Username"
          value={userName}
          error={Boolean(loginStore.error)}
          helperText={loginStore.error && `${loginStore.error}`}
          className={classes.input}
          onChange={handleUsernameChange}
          disabled={loginStore.loading}
          fullWidth={true}
          required={true}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          error={Boolean(loginStore.error)}
          className={classes.input}
          onChange={handlePasswordChange}
          disabled={loginStore.loading}
          fullWidth={true}
          required={true}
        />
        <div className={classes.buttonsWrapper}>
          <Button
            variant="contained"
            color="primary"
            disabled={loginStore.loading}
            onClick={handleRegister}
          >
            Login
          </Button>
          <Link to="/register">
            <Button
              variant="outlined"
              color="primary"
              disabled={loginStore.loading}
            >
              Register
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
});

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.mixins.container,
    width: '100%',
    maxWidth: '100%',
    background: `url(${require('assets/images/login-bg.jpg')}) center no-repeat`,
    backgroundSize: 'cover',
  },
  form: {
    ...theme.mixins.form,
    backgroundColor: theme.palette.common.white,
  },
  title: {
    marginBottom: 25,
  },
  input: {
    marginBottom: 25,
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',

    '& > button': {
      '&:first-child': {
        marginRight: 25,
      },
    },
  },
}));

export default Login;
