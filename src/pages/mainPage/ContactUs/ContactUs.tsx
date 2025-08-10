import { Trans, useTranslation } from "react-i18next";
import "./ContactUs.css";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import {
  AboutUsBackground,
  CleanerContactUs,
  Star,
  Stars,
} from "../../../assets";
import { IoIosCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { IoMailOpen } from "react-icons/io5";
import { motion } from "framer-motion";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="contactUs">
      <div className="text">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ y: -20 }}
          viewport={{ once: true }}
          className="title"
        >
          <img src={Star} alt="yellowStar" />
          <h1>{t("contact_us.title")}</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {" "}
          <Trans i18nKey="contact_us.text" components={{ br: <br /> }} />
        </motion.p>
        <img src={Stars} alt="Stars" className="stars" />
      </div>
      <div className="contactUs-section">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="contactUs-links"
        >
          <a href="tel:015563742675" className="contactInfo">
            <div className="contactInfo-icon">
              <IoIosCall />
            </div>
            <div className="contactInfo-text">
              <h4>{t("contact_us.phone_label")}</h4>
              <p>0155 63742675</p>
            </div>
          </a>
          <a href="mailto:kontakt@sauberfix.info" className="contactInfo">
            <div className="contactInfo-icon">
              <IoMailOpen />
            </div>
            <div className="contactInfo-text">
              <h4>{t("contact_us.mail_label")}</h4>
              <p>kontakt@sauberfix.info</p>
            </div>
          </a>
          <a
            href="https://maps.google.com/?q=1111+Avenue+Francis+Road,+Laval,+USA"
            className="contactInfo"
          >
            <div className="contactInfo-icon">
              <HiLocationMarker />
            </div>
            <div className="contactInfo-text">
              <h4>{t("contact_us.location_label")}</h4>
              <p>1111 Avenue Francis Road, Laval, USA</p>
            </div>
          </a>
        </motion.div>
        <ContactUsForm />
      </div>
      <div className="background-color">
        <img
          src={AboutUsBackground}
          alt="Abstract background pattern"
          loading="lazy"
        />
      </div>
      <img src={CleanerContactUs} alt="Cleaner" className="cleaner" />
    </div>
  );
};

export default ContactUs;
