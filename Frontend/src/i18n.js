import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Indonesian translations (Default)
import idTranslation from './locales/id.json';
// English translations
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: idTranslation },
      en: { translation: enTranslation }
    },
    lng: 'id', // Yeh ensure karega ke default language hamesha Indonesian ho
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;