import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MainScreen from '../@common/MainScreen';
import About from './About';
import ColoredLine from './HrLine';
import Reason from './Reason';
import Partners from './Partners';
import News from './News';

const image = require('../../assets/images/exhibition.jfif');

const Exhibition: FC = () => {
  const classes = useStyles()();

  return (
    <div className={classes.wrapper}>
      <MainScreen bgSrc={image} title="Exhibition Name" />
      <About />
      <ColoredLine color="black" />
      <Reason />
      <ColoredLine color="black" />
      <Partners />
      <ColoredLine color="black" />
      <News />
    </div>
  );
};

const useStyles = () =>
  makeStyles((theme) => ({
    wrapper: {
      fontFamily: 'Roboto',
      color: theme.palette.common.black,
    },
  }));

export default Exhibition;
