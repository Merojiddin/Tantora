import React, { FC } from 'react';
import MainScreen from '../@common/MainScreen';
import Events from './Events';
import About from './AboutProject';
import MyTabs from './Tabs';


const image = require('../../assets/images/mainbackg.jpg');

const Home: FC = () => (
  <>
    <MainScreen title={'ONLINE-FAIR'} bgSrc={image} />
    <Events />
    <About />
    <MyTabs />
  </>
);

export default Home;
