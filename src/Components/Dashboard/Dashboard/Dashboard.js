import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
// import { useLocation } from "react-router";
import Sidebar from "../DashNav/Sidebar";
import Collections from "../Collections/Collections";

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
  // const location = useLocation();
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={clsx(classes.root)}
      alignItems="center"
    >
      <Grid item md={3} lg={3} sm={12}>
        <Sidebar />
      </Grid>
      <Grid item md={9} lg={9} sm={12}>
        <Collections />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
