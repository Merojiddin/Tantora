import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import hexToRgb from 'hex-rgb';

const Search: FC = () => {
  const classes = useStyles();
  const InputElements = (
    <InputAdornment position="start">
      What are you looking for... |
    </InputAdornment>
  );

  return (
    <Container maxWidth="lg" className={classes.searchField}>
      <div className={classes.searchInputFieldContainer}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={InputElements}
          inputProps={{ 'aria-label': 'naked' }}
          className={classes.input}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon /> Search
        </Button>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => {
  const black = hexToRgb(theme.palette.common.black);
  const white = hexToRgb(theme.palette.common.white);

  return {
    searchField: {
      position: 'relative',
      width: '80%',
      margin: 'auto',
      alignItems: 'center',
      minWidth: 480,
      borderRadius: 10,
      boxSizing: 'border-box',
      zIndex: 100,
      bottom: 94,
    },

    searchInputFieldContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '49px 0px 49px 37px',
      borderRadius: 40,
      backgroundColor: '',
      border: `none 1px ${theme.palette.common.black}`,
      height: 167,
    },
    inputLabel: {
      position: 'relative',
      zIndex: 20,
    },
    input: {
      width: '100%',
      maxWidth: 1170,
      height: 100,
      backgroundColor: theme.palette.common.white,
      padding: '22px 37px 19px',
      zIndex: 100,
      border: `1px solid rgba(${black.red},${black.green},${black.blue}, 0.15)`,
      boxSizing: 'border-box',
      borderRadius: '5px 0 0 5px ',
      '&.MuiInput-underline:after': {
        left: 0,
        right: 0,
        bottom: 0,
        content: `""`,
        position: 'absolute',
        transform: 'none',
        transition: 'none',
        border: 'none',
        pointerEvents: 'none',
      },
      '&.MuiInput-underline:before': {
        left: 0,
        right: 0,
        bottom: 0,
        content: `""`,
        position: 'absolute',
        transition: 'none',
        borderBottom: 'none',
        pointerEvents: 'none',
      },
      '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
      },
    },
    iconButton: {
      padding: 10,
      position: 'relative',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.blue,
      borderRadius: '0 10px 10px 0',
      height: 100,
      width: 280,
      fontSize: '16px',
      '&.makeStyles-iconButton-34:hover': {
        backgroundColor: theme.palette.common.blue,
      },
    },
    divider: {
      height: 40,
      margin: 4,
      position: 'relative',
      border: `1px solid rgba(${white.red},${white.green},${white.blue}, 0.19)`,
    },
    button: {
      height: 100,
      width: 280,
      bottom: 5,
      fontWeight: 'bolder',
      color: theme.palette.common.white,
      zIndex: 150,
    },
  };
});

export default Search;
