import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationCn from "./locales/cn/translation.json";
import translationKr from "./locales/kr/translation.json";
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      cn: {
        translations: translationCn,
      },
      kr: {
        translations: translationKr,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;