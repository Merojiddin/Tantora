import React, { FC } from 'react';
import MainScreen from '../@common/MainScreen';
import Search from '../@common/Search';
import Events from './Events';

const image = require('../../assets/images/bgImg.jpg');

const Exhibitions: FC = () => (
  <div>
    <MainScreen title="Tantora" bgSrc={image} height="800px" />
    <Search />
    <Events />
  </div>
);

export default Exhibitions;
