import React, { FC } from 'react';
import MainScreen from 'components/@common/MainScreen';
import About from '../@common/About';
import MyTabs from './Tabs';
import Functionality from './Functionality';
import Necessities from './Necessities';

const image = require('../../assets/images/ExhibitorsPage/mainBg.jpg');

const Exhibitors: FC = () => (
  <div>
    <MainScreen title="Exhibitors" bgSrc={image} height="515px" />
    <About />
    <MyTabs />
    <Functionality />
    <Necessities />
  </div>
);

export default Exhibitors;
