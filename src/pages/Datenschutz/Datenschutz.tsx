import { useTranslation } from "react-i18next";
import "./Datenschutz.css";

const Datenschutz = () => {
  const { t } = useTranslation();

  return (
    <div className="datenschutz-container">
      <h1 className="datenschutz-title">{t("datenschutz.title")}</h1>
      <p className="datenschutz-intro">{t("datenschutz.intro_text")}</p>

      <div className="datenschutz-section">
        <h2 className="section-title">{t("datenschutz.control_title")}</h2>
        <p>{t("datenschutz.control_text_1")}</p>
        <p>{t("datenschutz.control_text_2")}</p>
        <p>{t("datenschutz.control_text_3")}</p>
      </div>

      <div className="datenschutz-section">
        <h2 className="section-title">{t("datenschutz.security_title")}</h2>
        <p>{t("datenschutz.security_text_1")}</p>
        <p>{t("datenschutz.security_text_2")}</p>
      </div>
    </div>
  );
};

export default Datenschutz;
