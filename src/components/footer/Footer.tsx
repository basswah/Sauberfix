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
  const servicesList = t("what_we_do.services_list", {
    returnObjects: true,
  }) as Service[];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer-container">
      <div className="main-footer">
        <div className="footer-section company-info">
          <Link
            to="/"
            className="footer-logo"
            onClick={() => window.scrollTo(0, 0)}
          >
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
              href="https://www.instagram.com/sauber.fix?igsh=cTZuZHV3MWkzeW1z&utm_source=qr"
              aria-label="Instagram"
            >
              <BiLogoInstagramAlt />
            </a>
            <a
              href="https://www.facebook.com/share/1GZMGmBBXe/?mibextid=wwXIfr"
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
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link to="/#AboutUs" onClick={() => handleScroll("AboutUs")}>
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                {t("navbar.services")}
              </Link>
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
          <a href="mailto:kontakt@sauberfix.info" className="contact-info">
            <IoMailOpenOutline />
            kontakt@sauberfix.info
          </a>
          <a href="tel:tel:+49 155 63742675" className="contact-info">
            <TbPhoneCall />
            0155 63742675
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
        <div className="legal-links">
          <Link to="/Impressum" onClick={() => window.scrollTo(0, 0)}>
            {t("footer.Impressum")}
          </Link>
          <p>|</p>
          <Link to="/Datenschutz " onClick={() => window.scrollTo(0, 0)}>
            {t("footer.Datenschutz")}
          </Link>
          <p>|</p>
          <Link to="/AGB" onClick={() => window.scrollTo(0, 0)}>
            {t("footer.AGB")}
          </Link>
          <p>|</p>
          <Link to="/Barrierefreiheit" onClick={() => window.scrollTo(0, 0)}>
            {t("footer.Barrierefreiheit")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
