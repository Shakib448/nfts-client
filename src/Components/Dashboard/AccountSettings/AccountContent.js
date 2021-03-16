import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  accountBtn: {
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    borderRadius: "15px",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
}));
const AccountContent = () => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" alignItems="center">
      <Typography variant="h4">
        <Box fontWeight="fontWeightBold">Connected Wallet</Box>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <Box fontWeight="fontWeightBold">
          0x3146232ea4091e6eb1e3fb50900cff8b02df307a
        </Box>
      </Typography>
      <Button variant="contained" className={clsx(classes.accountBtn)}>
        Disconnect
      </Button>
    </Grid>
  );
};

export default AccountContent;
