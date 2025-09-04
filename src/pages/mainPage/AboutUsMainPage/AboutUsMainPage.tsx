import {
  AboutUsBackground,
  AboutUsPic1,
  AboutUsPic2,
  AboutUsPic3,
  Star,
} from "../../../assets";
import "./AboutUsMainPage.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutUsMainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="AboutUs_mainPage" id="AboutUs">
      <div className="AboutUsPic1">
        <img
          src={AboutUsPic1}
          alt="A picture showing the company's work environment"
          loading="lazy"
        />
      </div>
      <div className="AboutUsInfo">
        <div className="AboutUsText">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
            className="AboutUsTitle"
          >
            <img src={Star} alt="Decorative star icon" />
            {t("about_us.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            viewport={{ once: true }}
            className="AboutUsParagraph"
          >
            {t("about_us.paragraph")}
          </motion.p>
        </div>
        <div className="AboutUsPics">
          <div className="AboutUsPic2">
            <img
              src={AboutUsPic2}
              alt="A picture of a team member working"
              loading="lazy"
            />
          </div>
          <div className="AboutUsPic3">
            <img
              src={AboutUsPic3}
              alt="A picture of a meeting"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="backGroundColor">
        <img
          src={AboutUsBackground}
          alt="Abstract background pattern"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutUsMainPage;
