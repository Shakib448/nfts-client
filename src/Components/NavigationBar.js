import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
    fontSize: 20,
  },
  appbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container justify="flex-start">
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </Grid>

          <Grid container justify="center">
            <Button className={classes.menuButton} color="inherit">
              Home
            </Button>
            <Button className={classes.menuButton} color="inherit">
              About
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Contact
            </Button>
          </Grid>

          <Grid container justify="flex-end">
            <Button className={classes.menuButton} color="inherit">
              Login
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Signup
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
