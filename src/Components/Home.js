import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ellipse from "../Images/Ellipse 18.png";

const useStyles = makeStyles((theme) => ({
  ellipse: {
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-9999",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box variant="div" className={classes.ellipse}>
      <img src={ellipse} alt="top left" />
    </Box>
  );
};

export default Home;
