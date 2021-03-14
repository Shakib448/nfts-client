import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import Sidebar from "../DashNav/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={clsx(classes.root)}
      alignItems="center"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Grid item md={3} lg={3} sm={12}>
        <Sidebar />
      </Grid>
      <Grid item md={9} lg={9} sm={12}></Grid>
    </Grid>
  );
};

export default Dashboard;
