import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Sidebar from "../DashNav/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item md={3} lg={3} sm={12} className={clsx(classes.root)}>
        <Grid container justify="center" alignItems="center">
          <Sidebar />
        </Grid>
      </Grid>
      <Grid item md={9} lg={9} sm={12}></Grid>
    </>
  );
};

export default Dashboard;
