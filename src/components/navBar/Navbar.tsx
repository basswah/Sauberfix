import { NavLink, useLocation } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import ChangeLang from "./ChangeLang/ChangeLang";
import { Logo } from "../../assets";
import { IoMdCall } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import { useState, useEffect } from "react"; // <<< تم إضافة useEffect
import { motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isDeu = i18n.language === "de";
  const location = useLocation(); // <<< للوصول إلى مسار URL الحالي

  // دالة لتنفيذ التمرير السلس
  const handleScroll = (id: string) => {
    // نستخدم مهلة بسيطة لضمان عرض العنصر قبل التمرير
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  };

  // Hook لمعالجة التمرير عند تغيير الـ hash في الرابط
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // إزالة "#"
      handleScroll(id);
    }
  }, [location.hash]); // يتم التشغيل فقط عند تغير الـ hash

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
          {/* استبدال <a> بـ NavLink مع إضافة onClick للتمرير السلس */}
          <NavLink to="/#AboutUs" onClick={() => handleScroll("AboutUs")}>
            {t("navbar.about")}
          </NavLink>
          <NavLink to="/services">{t("navbar.services")}</NavLink>
          {/* استبدال <a> بـ NavLink مع إضافة onClick للتمرير السلس */}
          <NavLink to="/#Contact" onClick={() => handleScroll("Contact")}>
            {t("navbar.contact")}
          </NavLink>
        </div>
        <div className="nav-buttons">
          <div className="changlang">
            <ChangeLang />
          </div>
          {/* هذا الرابط يبقى <a> لأنه لوظيفة خارجية (الاتصال) وليس للتنقل الداخلي */}
          <a href="tel:+49 155 63742675" className="callUs-button">
            <IoMdCall />
            {t("navbar.call_us")}
          </a>
          <div className="small-screns-menu">
            <FiMenu onClick={() => setOpenMenu(!openMenu)} />
            <ResponsiveMenu
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              handleScroll={handleScroll}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
