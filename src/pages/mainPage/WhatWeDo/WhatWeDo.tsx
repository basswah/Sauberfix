import { useTranslation } from "react-i18next";
import { Star } from "../../../assets";
import "./WhatWeDo.css";
import WhatWeDoCard from "./WhatWeDoCard/WhatWeDoCard";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import type { Service } from "../../../Tyeps";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const { t } = useTranslation();
  const servicesList = t("what_we_do.services_list", {
    returnObjects: true,
  }) as Service[];

  return (
    <div className="WhatWeDo">
      <div className="text">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="title"
        >
          <img src={Star} alt="yellowStar" />
          <h1>{t("what_we_do.title")}</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {t("what_we_do.paragraph")}
        </motion.p>
      </div>
      <div className="cards">
        {servicesList.map((service: Service) => (
          <WhatWeDoCard
            key={service.id}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
      <Link
        to="/services"
        className="goTo-sevices"
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("hero.view_services_btn")} <LuArrowUpRight />
      </Link>
    </div>
  );
};

export default WhatWeDo;
