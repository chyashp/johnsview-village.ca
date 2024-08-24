import React from "react";
import "./OurCorporation.scss";
import { motion } from "framer-motion";

const OurCorporation = () => {
  const paragraph = `
  Johnsview Village, York Condominium Corporation No. 279 was constructed in the mid 1970s and incorporated in August of 1976. Our Reserve Fund for replacement projects is fully funded and up-to-date, without the need to impose a special assessment on our owners throughout the history of the development. Johnsview Village manages finances closely through annual balanced budgets and invests funds wisely to ensure the highest return possible. 
  
  Condominium maintenance fees are comprised of the following:
  `;

  const listItems = [
    "Common element replacements",
    "Common element maintenance",
    "Water supply to units",
    "Heated pool with certified lifeguards",
    "Overnight security patrolled grounds",
    "On-site office and staffing",
    "5 days a week and 24/7 emergency support",
    "Common element insurance",
    "Lawn cutting services",
    "Community event activities",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls the delay between each line appearing
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const lines = paragraph.split("\n").map((line, index) => (
    <motion.p key={index} variants={lineVariants} className="line">
      {line}
    </motion.p>
  ));

  return (
    <div className="OurCorporation" >
      <div className="wrapper1">
        <div className="imgContainer">
          <img src="/00_johnsview_village_townhomes.jpg" alt="" />
        </div>
        <motion.div
          className="textContainer"
          variants={containerVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          <h1 className="title">About Our Corporation</h1>
          <div className="text">
            {lines}
            <ul className="bulletPoints">
              {listItems.map((item, index) => (
                <motion.li key={index} variants={lineVariants}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurCorporation;
