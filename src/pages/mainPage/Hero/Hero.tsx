import { Link } from "react-router-dom";
import "./Hero.css";
import { LuArrowUpRight } from "react-icons/lu";
import {
  Cleaner,
  SettingIcon,
  Stars,
  TrendingIcon,
  WomanHero,
} from "../../../assets";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Hero = () => {
  const { i18n, t } = useTranslation();
  
  const isArabic = i18n.language === "ar";
  const isDeu = i18n.language === "de";


  return (
    <div className={`${isDeu ? "langDe" : ""} hero`}>
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          {t("hero.title_part1")}
          <span> {t("hero.title_part2")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          {t("hero.paragraph")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <Link to="/services" className="goTo-sevices">
            {t("hero.view_services_btn")} <LuArrowUpRight />
          </Link>
        </motion.div>
        <img src={Stars} alt="Stars" className="stars1" />
        <img src={Stars} alt="Stars" className="stars2" />
        <img src={Cleaner} alt="Cleaner" className="cleaner" />
      </div>
      <div className={isArabic ? "hero-imgs-ar" : "hero-imgs-en"}>
        <div className="hero-img">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            src={WomanHero}
            alt="WomanHero"
            className="WomanHero_img"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flow-message1"
          >
            <img src={TrendingIcon} alt="trending" />
            <div>
              <h3>{t("hero.flow_message1.title")}</h3>
              <p>{t("hero.flow_message1.subtitle")}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flow-message2"
          >
            <img src={SettingIcon} alt="SettingIcon" />
            <div>
              <h4>{t("hero.flow_message2.title")}</h4>
              <p>{t("hero.flow_message2.subtitle")}</p>
            </div>
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
