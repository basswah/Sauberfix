import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { LogoFooter } from "../../assets";
import "./Footer.css";
import type { Service } from "../../Tyeps";


const Footer = () => {
  const { t } = useTranslation();
  const servicesList = t("what_we_do.services", {
    returnObjects: true,
  }) as Service[];

  return (
    <footer className="footer-container">
      <div className="main-footer">
        <div className="footer-section company-info">
          <Link to="/" className="footer-logo">
            <img src={LogoFooter} alt="Sauberfix Logo" />
          </Link>
          <p className="company-description">{t("footer.company_slogan")}</p>
          <div className="social-links">
            <a
              href="http://googleusercontent.com/www.tiktok.com/1"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="http://googleusercontent.com/www.instagram.com/3"
              aria-label="Instagram"
            >
              <BiLogoInstagramAlt />
            </a>
            <a
              href="http://googleusercontent.com/www.facebook.com/3"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t("footer.links_title")}</h3>
          <ul>
            <li>
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link to="/services">{t("navbar.services")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t("footer.services_title")}</h3>
          <ul>
            {servicesList.map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <div className="footer-contact">
            <h3>{t("footer.contact_title")}</h3>
            <p>{t("footer.contact_text")}</p>
          </div>
          <a
            href={`mailto:${t("footer.email_address")}`}
            className="contact-info"
          >
            <IoMailOpenOutline />
            kontakt@sauberfix.info
          </a>
          <a href={`tel:${t("footer.phone_number")}`} className="contact-info">
            <TbPhoneCall />
            0155 63742675
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
        <div className="legal-links">
          <Link to="/terms-of-use">{t("footer.terms_of_use")}</Link>
          <p>|</p>
          <Link to="/privacy-policy">{t("footer.privacy_policy")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
