import type { ServiceCard } from "../../../Tyeps";
import "./SerivcesCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const SerivcesCard = ({
  title,
  img,
  description,
  button,
  url,
}: ServiceCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { delay: 0.2 } }}
      className="SerivcesCard"
    >
      <img src={img} alt="ser-card-img" className="ser-card-img" />
      <div className="ser-card-text">
        <h4 className="ser-card-title">{title}</h4>
        <p className="ser-card-description">{description}</p>
      </div>
      <a href={url} className="ser-card-button">
        {button} <FaArrowRightLong />
      </a>
    </motion.div>
  );
};

export default SerivcesCard;
