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
        <h1>You made it</h1>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
