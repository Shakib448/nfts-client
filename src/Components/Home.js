import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ellipse1 from "../Images/Ellipse 18.png";
import ellipse2 from "../Images/Ellipse 19.png";

const useStyles = makeStyles((theme) => ({
  ellipse1: {
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-9999",
  },
  ellipse2: {
    position: "absolute",
    right: "0",
    top: "250px",
    zIndex: "-9999",
  },
  img: {
    height: "485px",
    width: "485px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box variant="div" className={classes.ellipse1}>
        <img src={ellipse1} alt="top left" className={classes.img} />
      </Box>
      <Box variant="div" className={classes.ellipse2}>
        <img src={ellipse2} alt="top left" className={classes.img} />
      </Box>
      <Grid container item md={6} lg={6} sm={12} xs={12}></Grid>
      <Grid container item md={6} lg={6} sm={12} xs={12}></Grid>
    </Container>
  );
};

export default Home;
