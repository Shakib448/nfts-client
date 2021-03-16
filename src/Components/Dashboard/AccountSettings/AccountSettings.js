import { Container, Grid } from "@material-ui/core";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";

const AccountSettings = () => {
  return (
    <Container>
      <Settings showAccount title="Account Settings" />

      <Grid item md={12} lg={12} sm={12}></Grid>
    </Container>
  );
};

export default AccountSettings;
