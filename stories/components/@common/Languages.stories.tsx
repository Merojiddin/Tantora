import React from 'react';
import { useTranslation } from 'react-i18next';
import Languages from 'components/@common/Languages';

import 'story-i18next';

export default {
  title: 'components/@common/Languages',
  component: Languages,
};

const TranslationExample = () => {
  const [t] = useTranslation('common');

  return (
    <div>
      <Languages />
      <p>{t('header.about')}</p>
    </div>
  );
};

export const render = () => <TranslationExample />;
