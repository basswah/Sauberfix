import { motion, AnimatePresence } from "framer-motion";
import type React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./ResponsiveMenu.css";
import ChangeLang from "../ChangeLang/ChangeLang";

// 1. تحديث الواجهة (interface) لاستقبال دالة التمرير
interface ResponsiveMenuProps {
  open: boolean;
  onClose: () => void;
  handleScroll: (id: string) => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  open,
  onClose,
  handleScroll,
}) => {
  const { t } = useTranslation();

  // دالة مساعدة لدمج وظيفتي التمرير والإغلاق
  const handleLinkClick = (id?: string) => {
    if (id) {
      handleScroll(id); // تنفيذ التمرير إذا كان الرابط داخليًا
    }
    onClose(); // إغلاق القائمة دائمًا بعد الضغط
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="res-menu"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="res-nav-ele">
            {/* 2. تحديث مسارات to وأحداث onClick */}
            <NavLink to="/" onClick={() => handleLinkClick()}>
              {t("navbar.home")}
            </NavLink>
            <NavLink to="/#AboutUs" onClick={() => handleLinkClick("AboutUs")}>
              {t("navbar.about")}
            </NavLink>
            <NavLink to="/services" onClick={() => handleLinkClick()}>
              {t("navbar.services")}
            </NavLink>
            <NavLink to="/#Contact" onClick={() => handleLinkClick("Contact")}>
              {t("navbar.contact")}
            </NavLink>
          </div>
          <ChangeLang onLanguageChange={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
