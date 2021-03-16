import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../DashNav/Sidebar";
import Collections from "../Collections/Collections";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import Feature from "../Feature/Feature";
import { motion } from "framer-motion";
import AccountSettings from "../AccountSettings/AccountSettings";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      overflowY: "scroll",
      display: "flex",
      justifyContent: "center",
    },
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

const Dashboard = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={clsx(classes.root)}
      alignItems="center"
      component={motion.div}
    >
      <Sidebar />
      <Grid item md={9} lg={9} sm={12}>
        {location.pathname === "/connect-wallet" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ConnectWallet />
          </motion.div>
        )}
        {location.pathname === "/collections" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Collections />
          </motion.div>
        )}
        {location.pathname === "/feature" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Feature />
          </motion.div>
        )}
        {location.pathname === "/account-settings" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AccountSettings />
          </motion.div>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
