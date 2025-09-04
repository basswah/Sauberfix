import { useTranslation } from "react-i18next";
import "./Impressum.css";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <div className="impressum-container">
      <h1 className="impressum-title">{t("impressum.title")}</h1>
      <div className="impressum-content">
        <p>{t("impressum.companyName")}</p>
        <p>{t("impressum.address")}</p>
        <p>{t("impressum.city")}</p>
        <a href={`tel:${t("impressum.phone")}`}>{t("impressum.phone")}</a>
        <a href={`mailto:${t("impressum.email")}`}>{t("impressum.email")}</a>
        <a href={t("impressum.website")}>{t("impressum.website")}</a>
        <p>{t("impressum.managingDirectors")}</p>
      </div>
      <p className="impressum-description">{t("impressum.description")}</p>
    </div>
  );
};

export default Impressum;
