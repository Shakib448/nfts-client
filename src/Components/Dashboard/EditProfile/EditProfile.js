import { Container } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import EditProfileBio from "./EditProfileBio";
import EditProfileHeader from "./EditProfileHeader";

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
};

const EditProfile = () => {
  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <EditProfileHeader />
        <EditProfileBio />
      </motion.div>
    </Container>
  );
};

export default EditProfile;
