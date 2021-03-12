import { Container, Paper, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Login = () => {
  return (
    <Container>
      <Paper
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Typography variant="h3">Welcome Back</Typography>
      </Paper>
    </Container>
  );
};

export default Login;
