import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "../src/Components/Languages/uzbek.json"
import enTranslation from "../src/Components/Languages/english.json"
import ruTranslation from "../src/Components/Languages/russian.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lang:i18n.language,
    debug: true,
    resources:{
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation},
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;