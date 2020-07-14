import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import hexToRgb from 'hex-rgb';

const Search: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation('common');
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const InputElements = (
    <InputAdornment position="start">{t('search.label')}... |</InputAdornment>
  );

  return (
    <Container maxWidth="lg" className={classes.searchField}>
      <Input
        id="input-with-icon-adornment"
        startAdornment={isTablet ? null : InputElements}
        inputProps={{ 'aria-label': 'naked' }}
        className={classes.input}
        placeholder={isTablet ? t('search.label') : ''}
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
        <p className={classes.searchBtnLabel}> {t('search.btn')}</p>
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => {
  const black = hexToRgb(theme.palette.common.black);
  const white = hexToRgb(theme.palette.common.white);

  return {
    searchField: {
      ...theme.mixins.container,
      position: 'relative',
      minWidth: 360,
      borderRadius: 10,
      boxSizing: 'border-box',
      zIndex: 100,
      transform: 'translateY(-50%)',
      [theme.breakpoints.down('xs')]: {
        height: 50,
      },
    },
    inputLabel: {
      position: 'relative',
      zIndex: 20,
    },
    input: {
      width: '100%',
      height: 100,
      padding: '22px 37px 19px',
      backgroundColor: theme.palette.common.white,
      border: `1px solid rgba(${black.red},${black.green},${black.blue}, 0.15)`,
      borderRadius: '5px 0 0 5px ',
      zIndex: 100,
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
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: 50,
      },
    },
    iconButton: {
      position: 'relative',
      fontSize: '16px',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.blue,
      borderRadius: '0 10px 10px 0',
      height: 100,
      width: 280,
      padding: 10,
      [theme.breakpoints.down('xs')]: {
        width: 68,
        height: 50,
      },
    },
    searchBtnLabel: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
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
