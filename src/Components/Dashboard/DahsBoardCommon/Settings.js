import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import settings from "../../../Images/setting.png";

const useStyles = makeStyles((theme) => ({
  settings: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    position: "absolute",
    top: 0,
    width: "70vw",
  },
  settingImg: {
    width: "40px",
    height: "40px",
  },
  connectBtn: {
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    borderRadius: "15px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    textTransform: "none",
  },
}));

const Settings = ({ showConnect }) => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={clsx(classes.settings)}>
      <IconButton>
        <img
          src={settings}
          alt="settings"
          className={clsx(classes.settingImg)}
        />
      </IconButton>
      {showConnect && (
        <Button variant="contained" className={clsx(classes.connectBtn)}>
          Connect Wallet
        </Button>
      )}
    </Grid>
  );
};

export default Settings;
