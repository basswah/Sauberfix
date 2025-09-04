import { useTranslation } from "react-i18next";
import "./Barrierefreiheit.css";

const Barrierefreiheit = () => {
  const { t } = useTranslation();

  return (
    <div className="barrierefreiheit-container">
      <h1 className="barrierefreiheit-title">{t("barrierefreiheit.title")}</h1>
      <p className="barrierefreiheit-intro">{t("barrierefreiheit.intro")}</p>

      <div className="barrierefreiheit-section">
        <h2 className="section-title">{t("barrierefreiheit.compliance_status_title")}</h2>
        <p>{t("barrierefreiheit.compliance_status_text")}</p>
      </div>

      <div className="barrierefreiheit-section">
        <h2 className="section-title">{t("barrierefreiheit.feedback_title")}</h2>
        <p>{t("barrierefreiheit.feedback_text_1")}</p>
        <ul>
          <li>{t("barrierefreiheit.feedback_phone")}</li>
          <li>{t("barrierefreiheit.feedback_email")}</li>
          <li>{t("barrierefreiheit.feedback_address")}</li>
        </ul>
      </div>
      
      <div className="barrierefreiheit-section">
        <h2 className="section-title">{t("barrierefreiheit.date_title")}</h2>
        <p>{t("barrierefreiheit.date_text")}</p>
      </div>
    </div>
  );
};

export default Barrierefreiheit;