import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { observer } from 'mobx-react-lite';

import { ROLE_ENUM } from 'stores/registerStore';
import useStore from 'hooks/useStore';
import Loading from 'components/@common/Loading';

const Register = observer(() => {
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState(ROLE_ENUM.CLIENT);
  const { authStore, registerStore } = useStore();
  const classes = useStyles();

  // form fields
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOB, setDateOB] = useState('');

  // input handlers
  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setConfirmPassword(e.target.value);
  };
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhone(e.target.value);
  };
  const handleDateOBChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDateOB(e.target.value);
  };

  const handleTypeChange: ChangeEventHandler<{
    name?: string;
    value: unknown;
  }> = (e) => {
    if (typeof e.target.value === 'string') {
      setUserType(e.target.value);
    }
  };

  const disabled =
    isEmpty(userName) ||
    isEmpty(password) ||
    isEmpty(email) ||
    isEmpty(firstName) ||
    isEmpty(lastName) ||
    isEmpty(dateOB) ||
    registerStore.loading;

  // User type handler
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // register handler
  const handleRegister: MouseEventHandler = () => {
    if (password === confirmPassword) {
      registerStore.handleRegister({
        userName,
        password,
        firstName,
        lastName,
        phone,
        email,
        dateOfBirth: dateOB,
        role: userType,
      });
    }
  };

  return (
    <Container className={classes.container}>
      {authStore.isAuth && <Redirect to="/" />}
      <form className={classes.form}>
        {!registerStore.loading ? (
          <Typography className={classes.title} variant="h4" color="secondary">
            Create New User
          </Typography>
        ) : (
          <Loading />
        )}
        <TextField
          label="Username"
          value={userName}
          error={Boolean(registerStore.error)}
          helperText={registerStore.error && `${registerStore.error}`}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
          onChange={handleUsernameChange}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          error={Boolean(registerStore.error)}
          className={classes.input}
          onChange={handlePasswordChange}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
        />
        <TextField
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
          error={password !== confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          error={Boolean(registerStore.error)}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
          onChange={handleEmailChange}
        />
        <TextField
          label="First name"
          value={firstName}
          error={Boolean(registerStore.error)}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
          onChange={handleFirstNameChange}
        />
        <TextField
          label="Last name"
          value={lastName}
          error={Boolean(registerStore.error)}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          required={true}
          onChange={handleLastNameChange}
        />
        <TextField
          label="Phone"
          value={phone}
          error={Boolean(registerStore.error)}
          className={classes.input}
          disabled={registerStore.loading}
          fullWidth={true}
          onChange={handlePhoneChange}
        />
        <TextField
          label="Date of birth"
          value={dateOB}
          type="date"
          error={Boolean(registerStore.error)}
          className={classes.input}
          disabled={registerStore.loading}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth={true}
          required={true}
          onChange={handleDateOBChange}
        />
        <div>
          <Select
            open={open}
            value={userType}
            fullWidth={true}
            required={true}
            className={classes.input}
            onChange={handleTypeChange}
            onClose={handleClose}
            onOpen={handleOpen}
          >
            <MenuItem value={ROLE_ENUM.CLIENT}>Client</MenuItem>
            <MenuItem value={ROLE_ENUM.PRODUCER}>Producer</MenuItem>
            <MenuItem value={ROLE_ENUM.ORGANIZER}>Organizor</MenuItem>
          </Select>
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={registerStore.loading || disabled}
          onClick={handleRegister}
        >
          Register
        </Button>
      </form>
    </Container>
  );
});

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.mixins.container,
    width: '100%',
    maxWidth: '100%',
    background: `url(${require('assets/images/register-bg.jpg')}) center no-repeat`,
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
}));

export default Register;
