import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import logo from "../Images/logo.png";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(4),
    fontSize: 20,
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  signUp: {
    borderRadius: "25px",
    marginRight: theme.spacing(4),
    fontSize: 20,
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    textTransform: "none",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  appBar: {
    boxShadow: "none",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <AppBar
        position="fixed"
        color="transparent"
        className={clsx(classes.appBar)}
      >
        <Toolbar className={clsx(classes.toolBar)}>
          <Grid container justify="flex-start" component={NavLink} to="/">
            <img src={logo} alt="logo" />
          </Grid>
          <Grid container justify="center">
            <Button
              component={NavLink}
              to="/"
              className={clsx(classes.menuButton)}
              color="inherit"
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/about"
              className={clsx(classes.menuButton)}
              color="inherit"
            >
              About
            </Button>
            <Button
              component={NavLink}
              to="/connect-wallet"
              className={clsx(classes.menuButton)}
              color="inherit"
            >
              Wallet
            </Button>
            <Button
              className={clsx(classes.menuButton)}
              color="inherit"
              component={NavLink}
              to="/contact"
            >
              Contact
            </Button>
          </Grid>

          <Grid container justify="flex-end">
            <Button
              component={NavLink}
              to="/login"
              className={clsx(classes.menuButton)}
              color="inherit"
            >
              Login
            </Button>
            <Button
              className={clsx(classes.signUp)}
              component={NavLink}
              to="/sign-up"
              color="inherit"
              variant="contained"
            >
              Signup
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
