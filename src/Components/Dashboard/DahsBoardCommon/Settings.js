import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import settings from "../../../Images/setting.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  settings: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    position: "absolute",
    top: 0,
    width: "70vw",
  },
  setting: {
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

const Settings = ({ showConnect, title, showAccount }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      justify="space-between"
      className={clsx({
        [classes.settings]: showConnect,
        [classes.setting]: showAccount,
      })}
    >
      {showAccount ? (
        <Grid container direction="row" alignItems="center">
          <IconButton onClick={handleClick}>
            <img
              src={settings}
              alt="settings"
              className={clsx(classes.settingImg)}
            />
          </IconButton>
          <Typography variant="h3">
            <Box fontWeight="fontWeightBold">{title}</Box>
          </Typography>
        </Grid>
      ) : (
        <IconButton onClick={handleClick}>
          <img
            src={settings}
            alt="settings"
            className={clsx(classes.settingImg)}
          />
        </IconButton>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/account-settings">
          Account Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {showConnect && (
        <Button variant="contained" className={clsx(classes.connectBtn)}>
          Connect Wallet
        </Button>
      )}
    </Grid>
  );
};

export default Settings;
