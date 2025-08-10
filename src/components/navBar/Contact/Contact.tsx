import { BiLogoInstagramAlt } from "react-icons/bi";
import "./Contact.css";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="Contact">
      <div className="contact-call-us">
        <TbPhoneCall />
        <p className="contact-text">
          {t("contact_info.call_us")} <span>:</span>{" "}
          <span className="contact-bold">0155 63742675</span>
        </p>
      </div>
      <div className="contct-social">
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <BiLogoInstagramAlt />
        </a>
        <a href="https://www.tiktok.com/" aria-label="TikTok">
          <FaTiktok />
        </a>
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>
      <div className="contact-Email">
        <IoMailOpenOutline />
        <p className="contact-text">
          {t("contact_info.email_us")} <span>:</span>
          <span className="contact-bold">kontakt@sauberfix.info</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;