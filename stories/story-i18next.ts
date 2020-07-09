import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Welcome to StoryBook': 'Welcome to React and StoryBook',
        },
      },
      cn: {
        translation: {
          'Welcome to StoryBook': 'Same shit in Chinese',
        },
      },
      ru: {
        translation: {
          'Welcome to StoryBook': 'Добро пожаловать в Реакт и Сторибук',
        },
      },
    },
    whitelist: ['en', 'cn', 'ru'],
    preload: ['en', 'cn', 'ru'],
    fallbackLng: 'en',
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
