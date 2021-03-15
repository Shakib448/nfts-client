import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../DashNav/Sidebar";
import Collections from "../Collections/Collections";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import Feature from "../Feature/Feature";

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

const Dashboard = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={clsx(classes.root)}
      alignItems="center"
    >
      <Sidebar />
      <Grid item md={9} lg={9} sm={12}>
        {location.pathname === "/connect-wallet" && <ConnectWallet />}
        {location.pathname === "/collections" && <Collections />}
        {location.pathname === "/feature" && <Feature />}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
