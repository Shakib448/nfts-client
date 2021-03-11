import { Box, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import img from "../../Images/robot.png";
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const HomeAnimation = () => {
  const classes = useStyles();
  return (
    <>
      <Box variant="div" className={clsx(classes.root)}>
        <Grid item>
          <img src={img} alt="primary" className={clsx(classes.img)} />
        </Grid>
      </Box>
    </>
  );
};

export default HomeAnimation;
