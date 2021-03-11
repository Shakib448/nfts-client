import { Box, makeStyles, Grid, Button } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import img from "../../Images/robot.png";
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
  },
  img: {
    width: "100%",
    height: "auto",
  },
  linkBtn: {
    padding: "10px 30px",
    background: "linear-gradient(92.72deg, #96E6A1 4.69%, #D4FC79 93.45%)",
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: "bold",
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
        <Grid item container justify="center">
          <Button className={clsx(classes.linkBtn)} variant="primary">
            https://nfts.bio/Joe
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default HomeAnimation;
