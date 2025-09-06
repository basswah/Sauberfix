import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5"; // ⚠️ تم تصحيح الاستيراد
import { useTranslation } from "react-i18next"; // ⚠️ تم إضافة الاستيراد
import { BoyAvtar, GirlAvtar } from "../../../assets";
import "./ServicesPageContactUs.css";
import { motion } from "framer-motion";

const ServicesPageContactUs = () => {
  const { t } = useTranslation(); // ⚠️ تم إضافة الـ Hook
  return (
    <div className="sev_contactUs">
      <img src={BoyAvtar} alt="boyImg" loading="lazy" className="boy-avatar" />
      <div className="sev_contactUs_text">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t("services_page.contactUs.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {t("services_page.contactUs.paragraph")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.9 }}
          viewport={{ once: true }}
          className="sev_contactUs_urls"
        >
          <a href="mailto:kontakt@sauberfix.info" className="sev_contactUs_url">
            <div className="sev_contactUs_icon">
              <IoMailOpenOutline />
            </div>
            <p className="sev_contactUs_p">
              <span>{t("services_page.contactUs.email")}</span>
              {t("contact_info.email_address")}
            </p>
          </a>
          <a href="tel:+49 155 63742675" className="sev_contactUs_url">
            <div className="sev_contactUs_icon">
              <IoIosCall />
            </div>
            <p className="sev_contactUs_p">
              <span>{t("services_page.contactUs.phone")}</span>
              {t("contact_info.phone_number")}
            </p>
          </a>
        </motion.div>
      </div>
      <img
        src={GirlAvtar}
        alt="girlImg" // ⚠️ تم تصحيح الـ alt
        loading="lazy"
        className="Girl-avatar"
      />
    </div>
  );
};

export default ServicesPageContactUs;
