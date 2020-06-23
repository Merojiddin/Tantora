import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Search: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.searchField}>
      <label htmlFor="text" className={classes.label}>
        Keep in touch with all online exhibitions
      </label>
      <Input
        type="text"
        className={classes.input}
        placeholder="What are you looking for..."
      />
      <Button variant="contained" className={classes.button}>
        Search
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  searchField: {
    position: 'relative',
    width: '60%',
    marginBottom: 150,
    alignItems: 'center',
    minWidth: 480,
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    padding: '25px 15px',
    borderRadius: 4,
    zIndex: 100,
  },
  button: {
    position: 'absolute',
    justifyContent: 'right',
    height: 46,
    right: 22,
    bottom: 5,
    fontWeight: 'bolder',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    zIndex: 150,
  },
}));

export default Search;
