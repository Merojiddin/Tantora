import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';

const Search: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.searchField}>
      <label htmlFor="text" className={classes.label}>
        Keep in touch with all online exhibitions
      </label>
      <Typography className={classes.searchInputFieldContainer}>
        <InputBase
          className={classes.input}
          placeholder="What are you looking for..."
          inputProps={{ 'aria-label': 'naked' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Typography>
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
    fontSize: 24,
    fontFamily: 'Segoe UI',
  },
  searchInputFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '49px 0px 49px 37px',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: 'none 1px black',
    height: 167

  },
  input: {
    width: '100%',
    maxWidth: 1066,
    height: 69,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    padding: '22px 37px 19px',
    zIndex: 100,
    
  },
  iconButton: {
    padding: 10,
    position: 'relative',
    left: '-76px'
  },
  divider: {
    height: 40,
    margin: 4,
    position: 'relative',
    left: '-97px'
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
