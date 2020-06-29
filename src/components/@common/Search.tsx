import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';

const Search: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.searchField}>
      <Typography className={classes.searchInputFieldContainer}>
        <InputBase
          className={classes.input}
          placeholder="What are you looking for..."
          inputProps={{ 'aria-label': 'naked' }}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon /> Search
        </Button>
      </Typography>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  searchField: {
    position: 'relative',
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    minWidth: 480,
    borderRadius: 10,
    top: '12%',
    boxSizing: 'border-box',
    zIndex: 100,
  },

  searchInputFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '49px 0px 49px 37px',
    borderRadius: 40,
    backgroundColor: '',
    border: 'none 1px black',
    height: 167,
  },
  input: {
    width: '100%',
    maxWidth: 1170,
    height: 100,
    backgroundColor: 'white',
    padding: '22px 37px 19px',
    zIndex: 100,
    border: '1px solid rgba(0, 0, 0, 0.15)',
    boxSizing: 'border-box',
    borderRadius: '5px 0 0 5px ',
  },
  iconButton: {
    padding: 10,
    position: 'relative',
    color: '#FFF',
    backgroundColor: '#1B70BE',
    borderRadius: '0 10px 10px 0',
    height: 100,
    width: 280,
    fontSize: '16px',
  },
  divider: {
    height: 40,
    margin: 4,
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.19)',
  },
  button: {
    height: 100,
    width: 280,
    bottom: 5,
    fontWeight: 'bolder',
    color: theme.palette.common.white,
    zIndex: 150,
  },
}));

export default Search;
