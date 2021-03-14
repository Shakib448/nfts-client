import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import settings from "../../../Images/setting.png";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
const Collections = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box>
        <img src={settings} alt="settings" />
      </Box>
    </motion.div>
  );
};

export default Collections;
