import React, { FC } from 'react';

import MainScreen from 'components/@common/MainScreen';
import About from 'components/@common/About';
import Process from 'components/@common/Process';
import Tabs from './Tabs';
import Results from './Result';

const image = require('assets/images/OrganizatorsPage/organizatorsBg.jpg');

const Organizators: FC = () => (
  <div>
    <MainScreen title="Organizators" bgSrc={image} height="515px" />
    <About />
    <Tabs />
    <Results />
    <Process />
  </div>
);

export default Organizators;
