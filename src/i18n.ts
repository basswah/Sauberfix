// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة
import translationEN from "./Locales/en/translation.json";
import translationAR from "./Locales/ar/translation.json";
import translationDE from "./Locales/de/translation.json";

// تعريف نوع موارد الترجمة
// هذا يساعد في التحقق من الأخطاء والإكمال التلقائي لمفاتيح الترجمة
export interface Resources {
  translation: typeof translationEN; // نفترض أن جميع ملفات الترجمة لها نفس البنية
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
} as const; // استخدام 'as const' لتحديد أنواع محددة للغات

i18n
  .use(LanguageDetector) // اكتشاف لغة المستخدم
  .use(initReactI18next) // تمرير نسخة i18n إلى react-i18next
  .init<Resources>({
    // هنا نحدد نوع الموارد
    resources,
    fallbackLng: "en", // اللغة الافتراضية إذا فشل الكشف أو كانت اللغة غير متوفرة
    debug: true, // تفعيل وضع التصحيح للتطوير (اجعله false في الإنتاج)
    interpolation: {
      escapeValue: false, // React يحمي بالفعل من XSS
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
