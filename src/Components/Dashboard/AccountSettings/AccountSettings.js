import { Container, Grid } from "@material-ui/core";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";
import AccountContent from "./AccountContent";

const AccountSettings = () => {
  return (
    <>
      <Settings showAccount title="Account Settings" />
      <Container>
        <Grid item container direction="column" md={12} lg={12} sm={12}>
          <AccountContent />
        </Grid>
      </Container>
    </>
  );
};

export default AccountSettings;
