import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Header = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.root}>
        <Typography color="inherit">
          &copy; {new Date().getFullYear()} Online Exhibition
        </Typography>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 70,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '0 25px',
  },
}));

export default Header;
