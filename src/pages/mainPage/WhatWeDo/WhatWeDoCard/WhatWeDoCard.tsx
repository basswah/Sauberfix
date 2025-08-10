import type { WhatWeDoCardProps } from "../../../../Tyeps";
import "./WhatWeDoCard.css";
import { motion } from "framer-motion";

const WhatWeDoCard = ({ title, icon, description }: WhatWeDoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      whileHover={{
        y: -20,
        transition: {
          duration: 0,
        },
      }}
      viewport={{ once: true }}
      className="WhatWeDoCard"
    >
      <img src={icon} alt="icons" className="card-icon" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </motion.div>
  );
};

export default WhatWeDoCard;
