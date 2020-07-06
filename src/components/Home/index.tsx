import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import MainScreen from 'components/@common/MainScreen';
import Events from './Events';
import About from './AboutProject';
import MyTabs from './Tabs';

const image = require('assets/images/mainbackg.jpg');

const Home: FC = () => {
  const [t] = useTranslation('home');

  return (
    <div>
      <MainScreen
        title={t('section_one.title')}
        subtitle={t('section_one.subtitle')}
        subtitle2={t('section_one.subtitle2')}
        bgSrc={image}
      />
      <Events />
      <About />
      <MyTabs />
    </div>
  );
};

export default Home;
