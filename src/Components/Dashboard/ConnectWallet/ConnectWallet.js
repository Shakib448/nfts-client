import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

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
  exit: { y: "100vh", transition: { ease: "easeInOut" } },
};
const ConnectWallet = () => {
  const classes = useStyles();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className={clsx(classes.root)}
    ></motion.div>
  );
};

export default ConnectWallet;
