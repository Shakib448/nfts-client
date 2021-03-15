import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";

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
};
const ConnectWallet = () => {
  const classes = useStyles();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(classes.root)}
    >
      <Settings showConnect />
      <Typography variant="h1" color="secondary" align="center">
        <Box fontWeight="fontWeightBold">Connect wallet to start</Box>
      </Typography>
    </motion.div>
  );
};

export default ConnectWallet;
