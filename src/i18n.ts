// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة
import translationEN from "./Locales/en/translation.json";
import translationAR from "./Locales/ar/translation.json";
import translationDE from "./Locales/de/translation.json";

// تعريف نوع موارد الترجمة
export interface Resources {
  translation: typeof translationEN;
}

// الترجمات
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  de: {
    translation: translationDE,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<Resources>({
    resources,
    fallbackLng: "de",
    supportedLngs: ["de", "ar", "en"],
    load: "languageOnly",
    debug: false,
    detection: {
      order: ["localStorage"], // تقليل خيارات الكشف عن اللغة
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
