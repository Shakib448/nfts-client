import { Box, Container, Grid } from "@material-ui/core";
import React from "react";

const AccountSettings = () => {
  return (
    <Container>
      <Box fontWeight="fontWeightBold">Account Settings</Box>
      <Grid item md={12} lg={12} sm={12}></Grid>
    </Container>
  );
};

export default AccountSettings;
