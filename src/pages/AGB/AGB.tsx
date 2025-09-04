import { useTranslation } from "react-i18next";
import "./AGB.css";

const AGB = () => {
  const { t } = useTranslation();

  return (
    <div className="agb-container">
      <h1 className="agb-title">{t("agb.title")}</h1>
      <p className="agb-subtitle">{t("agb.subtitle")}</p>
      
      <div className="agb-section">
        <h3>1. {t("agb.section1_title")}</h3>
        <p>{t("agb.section1_text")}</p>
      </div>

      <div className="agb-section">
        <h3>2. {t("agb.section2_title")}</h3>
        <p>{t("agb.section2_text")}</p>
      </div>

      <div className="agb-section">
        <h3>3. {t("agb.section3_title")}</h3>
        <p>{t("agb.section3_text")}</p>
      </div>

      <div className="agb-section">
        <h3>4. {t("agb.section4_title")}</h3>
        <p>{t("agb.section4_text")}</p>
      </div>
      
      <div className="agb-section">
        <h3>5. {t("agb.section5_title")}</h3>
        <p>{t("agb.section5_text")}</p>
      </div>

      <div className="agb-section">
        <h3>6. {t("agb.section6_title")}</h3>
        <p>{t("agb.section6_text")}</p>
      </div>

      <div className="agb-section">
        <h3>7. {t("agb.section7_title")}</h3>
        <p>{t("agb.section7_text")}</p>
      </div>

      <div className="agb-section">
        <h3>8. {t("agb.section8_title")}</h3>
        <p>{t("agb.section8_text")}</p>
      </div>

      <div className="agb-section">
        <h3>9. {t("agb.section9_title")}</h3>
        <p>{t("agb.section9_text")}</p>
      </div>

      <div className="agb-section">
        <h3>10. {t("agb.section10_title")}</h3>
        <p>{t("agb.section10_text")}</p>
      </div>
      
      <div className="agb-section">
        <h3>11. {t("agb.section11_title")}</h3>
        <p>{t("agb.section11_text")}</p>
      </div>
    </div>
  );
};

export default AGB;