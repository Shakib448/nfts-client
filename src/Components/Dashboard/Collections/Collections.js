import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import settings from "../../../Images/setting.png";

const useStyles = makeStyles((theme) => ({
  settings: {
    position: "absolute",
    top: 30,
    left: 320,
  },
  collections: {
    position: "absolute",
    top: 150,
    left: 370,
    padding: theme.spacing(4),
  },
  collectionsBtn: {
    background: "transparent",
    marginLeft: theme.spacing(2),
    textTransform: "none",
    fontSize: 18,
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
const Collections = () => {
  const classes = useStyles();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box className={clsx(classes.settings)}>
        <IconButton>
          <img src={settings} alt="settings" />
        </IconButton>
      </Box>
      <Grid container direction="row" className={clsx(classes.collections)}>
        <Typography variant="h3">Collections</Typography>
        <Button variant="outlined" className={clsx(classes.collectionsBtn)}>
          New Collection
        </Button>
      </Grid>
    </motion.div>
  );
};

export default Collections;
