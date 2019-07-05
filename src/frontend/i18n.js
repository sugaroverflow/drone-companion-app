
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

i18n
  // i18next-xhr-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: { default: ['en-CA'], fr: ['fr-CA'] },
    debug: true,
    saveMissing: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {

    },
    react: {
      bindI18n: 'languageChanged editorSaved',
    },
  });

export default i18n;
