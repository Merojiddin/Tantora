import React, { FC } from 'react';
import MainScreen from '../@common/MainScreen';
import Events from './Events';
import About from './AboutProject';

const image = require('../../assets/images/mainbg.jpg');

const Home: FC = () => (
  <>
    <MainScreen title={'ONLINE-FAIR'} bgSrc={image} />
    <Events />
    <About />
  </>
);

export default Home;
