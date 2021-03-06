import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MainScreen from 'components/@common/MainScreen';
import About from 'components/@common/About';
import ColoredLine from 'components/@common/HrLine';
import Reason from './Reason';
import Partners from './Partners';
import News from './News';

const image = require('assets/images/ExhibitorsPage/mainBg.jpg');

const Exhibition: FC = () => {
  const classes = useStyles()();

  return (
    <div className={classes.wrapper}>
      <MainScreen bgSrc={image} title="Exhibition Name" height="515px" />
      <About />
      <ColoredLine
        color="black"
        width="640px"
        margin="50px auto"
        right=""
        height="6"
      />
      <Reason />
      <ColoredLine
        color="black"
        width="640px"
        margin="50px auto"
        right=""
        height="6"
      />
      <Partners />
      <ColoredLine
        color="black"
        width="640px"
        margin="50px auto"
        right=""
        height="6"
      />
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
