import React, { FC } from 'react';
import MainScreen from 'components/@common/MainScreen';
import Events from './Events';
import About from './AboutProject';
import MyTabs from './Tabs';
import Search from 'components/@common/Search';

const image = require('../../assets/images/mainbackg.jpg');

const Home: FC = () => (
  <div>
    <MainScreen title="ONLINE-FAIR" bgSrc={image} height="800px" />
    <Search />
    <Events />
    <About />
    <MyTabs />
  </div>
);

export default Home;
