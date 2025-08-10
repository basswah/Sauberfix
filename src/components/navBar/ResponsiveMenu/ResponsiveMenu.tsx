import { motion, AnimatePresence } from "framer-motion";
import type React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./ResponsiveMenu.css";
import ChangeLang from "../ChangeLang/ChangeLang";

interface ResponsiveMenuProps {
  open: boolean;
  onClose: () => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

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
            <NavLink to="" onClick={onClose}>
              {t("navbar.home")}
            </NavLink>
            <NavLink to="" onClick={onClose}>
              {t("navbar.about")}
            </NavLink>
            <NavLink to="" onClick={onClose}>
              {t("navbar.services")}
            </NavLink>
            <NavLink to="" onClick={onClose}>
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