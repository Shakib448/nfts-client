import { Container, Grid } from "@material-ui/core";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";
import AccountContent from "./AccountContent";
import AccountForm from "./AccountForm";
import AccountPolicy from "./AccountPolicy";

const AccountSettings = () => {
  return (
    <>
      <Settings showAccount title="Account Settings" />
      <Container>
        <Grid item container md={12} lg={12} sm={12}>
          <Grid item container direction="column" alignItems="center">
            <AccountContent />
            <AccountForm />
            <AccountPolicy />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AccountSettings;
