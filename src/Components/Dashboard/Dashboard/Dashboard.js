import { Grid } from "@material-ui/core";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Grid item md={3} lg={3} sm={12}></Grid>
      <Grid item md={9} lg={9} sm={12}></Grid>
    </>
  );
};

export default Dashboard;
