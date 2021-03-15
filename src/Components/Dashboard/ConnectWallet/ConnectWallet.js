import { Box, Typography } from "@material-ui/core";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";

const ConnectWallet = () => {
  return (
    <>
      <Settings showConnect />
      <Typography variant="h1" color="secondary" align="center">
        <Box fontWeight="fontWeightBold">Connect wallet to start</Box>
      </Typography>
    </>
  );
};

export default ConnectWallet;
