import React, { FC } from 'react';
import MainScreen from 'components/@common/MainScreen';
import About from './About';
import MyTabs from './Tabs';
import Testimonials from './Testimonials';

const image = require('../../assets/images/VisitorsPage/Mainbg.jpg');

const Visitors: FC = () => (
  <div>
    <MainScreen title="Visitors" bgSrc={image} height="515px"/>
    <About />
    <MyTabs />
    <Testimonials />
  </div>
);

export default Visitors;
