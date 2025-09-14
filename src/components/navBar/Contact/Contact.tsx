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
      <a href="tel:+49 155 63742675" className="contact-call-us">
        <TbPhoneCall />
        <p className="contact-text">
          {t("contact_info.call_us")} <span>:</span>{" "}
          <span className="contact-bold">015563742675</span>
        </p>
      </a>
      <div className="contct-social">
        <a
          href="https://www.instagram.com/sauber.fix?igsh=cTZuZHV3MWkzeW1z&utm_source=qr"
          aria-label="Instagram"
        >
          <BiLogoInstagramAlt />
        </a>
        <a
          href="https://www.tiktok.com/@sauber.fix6?_t=ZN-8zgz4ZuXEww&_r=1"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.facebook.com/share/1GZMGmBBXe/?mibextid=wwXIfr"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
      <a href="mailto:kontakt@sauberfix.info" className="contact-Email">
        <IoMailOpenOutline />
        <p className="contact-text">
          {t("contact_info.email_us")} <span>:</span>
          <span className="contact-bold">kontakt@sauberfix.info</span>
        </p>
      </a>
    </div>
  );
};

export default Contact;
