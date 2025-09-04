import { useTranslation } from "react-i18next";
import "./ServicesPage.css";
import { motion } from "framer-motion";
import { ServicesBackground, Star } from "../../assets";
import ServicesCard from "./SerivcesCard/SerivcesCard.tsx";
import type { ServiceCard as ServiceCardType } from "../../Tyeps.ts"; // ⚠️ تم تصحيح الخطأ الإملائي هنا
import ServicesPageContactUs from "./ServicesPageContactUs/ServicesPageContactUs.tsx";

const ServicesPage = () => {
  const { t } = useTranslation();
  const servicesList = t("services_page.services_list", {
    returnObjects: true,
  }) as ServiceCardType[];
  return (
    <div className="services-page">
      <div className="text">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="title"
        >
          <img src={Star} alt="yellowStar" />
          <h1>{t("services_page.title")}</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {t("services_page.subtitle")}
        </motion.p>
      </div>
      <div className="Services-cards">
        {servicesList.map((card: ServiceCardType) => (
          <ServicesCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            img={card.img}
            button={card.button}
            url={card.url}
          />
        ))}
        <img
          src={ServicesBackground}
          alt={t("services_page.background_alt")}
          className="servicesBackGround"
        />
      </div>
      <ServicesPageContactUs />
    </div>
  );
};

export default ServicesPage;
