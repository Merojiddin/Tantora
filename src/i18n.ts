import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
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
