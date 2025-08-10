import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlagAR, FlagDE, FlagEN } from "../../../assets";
import "./ChangeLang.css";

interface ChangeLangProps {
  onLanguageChange?: () => void;
}

const languageOptions = {
  en: {
    label: "Eng",
    flag: FlagEN,
  },
  ar: {
    label: "عربي",
    flag: FlagAR,
  },
  de: {
    label: "Deu",
    flag: FlagDE,
  },
};

const ChangeLang: React.FC<ChangeLangProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // للتحكم في عرض/إخفاء القائمة
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLangCode = i18n.language;
  // جلب معلومات اللغة الحالية، مع fallback للإنجليزية إذا لم يتم العثور على اللغة
  const currentLangInfo =
    languageOptions[currentLangCode as keyof typeof languageOptions] ||
    languageOptions.en;

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // دالة لتغيير اللغة وإغلاق القائمة
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // إغلاق القائمة بعد الاختيار
    onLanguageChange?.(); // Close responsive menu
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      {/* عرض اللغة الحالية: العلم والنص وسهم التبديل */}
      <button
        className="current-language-display"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={currentLangInfo.flag}
          alt={`${currentLangInfo.label} Flag`}
          className="flag-icon"
        />
        <span className="lang-text">{currentLangInfo.label}</span>
        <span className="dropdown-arrow">▼</span> {/* سهم صغير */}
      </button>

      {/* القائمة المنسدلة للغات الأخرى، تظهر فقط عند فتحها */}
      {isOpen && (
        <div className="language-dropdown">
          {Object.entries(languageOptions).map(([code, info]) => (
            <button
              key={code}
              className={`dropdown-item ${
                code === currentLangCode ? "active" : ""
              }`}
              onClick={() => changeLanguage(code)}
            >
              <img
                src={info.flag}
                alt={`${info.label} Flag`}
                className="flag-icon"
              />
              <span className="lang-text">{info.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLang;
