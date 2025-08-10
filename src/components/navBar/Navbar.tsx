import { NavLink } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import ChangeLang from "./ChangeLang/ChangeLang";
import { Logo } from "../../assets";
import { IoMdCall } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isDeu = i18n.language === "de";
  return (
    <div className={`${isDeu ? "langde" : ""} navBar`}>
      <Contact />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="nav"
      >
        <div className="nav-Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-ele">
          <NavLink to="/">{t("navbar.home")}</NavLink>
          <NavLink to="/about">{t("navbar.about")}</NavLink>
          <NavLink to="/services">{t("navbar.services")}</NavLink>
          <NavLink to="/contact">{t("navbar.contact")}</NavLink>
        </div>
        <div className="nav-buttons">
          <div className="changlang">
            <ChangeLang />
          </div>
          <a href="tel:0155 63742675" className="callUs-button">
            <IoMdCall />
            {t("navbar.call_us")}
          </a>
          <div className="small-screns-menu">
            <FiMenu onClick={() => setOpenMenu(!openMenu)} />
            <ResponsiveMenu
              open={openMenu}
              onClose={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
