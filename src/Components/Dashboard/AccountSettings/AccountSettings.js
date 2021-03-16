import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";

const AccountSettings = () => {
  return (
    <>
      <Settings showAccount title="Account Settings" />
      <Container>
        <Grid item container direction="column" md={12} lg={12} sm={12}>
          <Grid item container direction="column" alignItems="center">
            <Typography variant="h4">
              <Box fontWeight="fontWeightBold">Connected Wallet</Box>
            </Typography>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightBold">
                0x3146232ea4091e6eb1e3fb50900cff8b02df307a
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AccountSettings;
