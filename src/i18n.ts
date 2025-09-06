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
    fallbackLng: "de", // تغيير اللغة الافتراضية إلى الألمانية
    supportedLngs: ["de", "ar", "en"], // تحديد اللغات المدعومة مع وضع الألمانية أولاً
    load: "languageOnly", // تحميل اللغة الرئيسية فقط
    debug: false, // تعطيل وضع التصحيح في الإنتاج
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "cookie",
        "sessionStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
  });

export default i18n;
