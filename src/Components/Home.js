import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ellipse1 from "../Images/Ellipse 18.png";
import ellipse2 from "../Images/Ellipse 19.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
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
  animateImg: {
    width: "205px",
    height: "52px",
  },
  fonts: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#999999",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box variant="div" className={classes.ellipse1}>
        <img src={ellipse1} alt="top left" className={classes.img} />
      </Box>
      <Box variant="div" className={classes.ellipse2}>
        <img src={ellipse2} alt="top left" className={classes.img} />
      </Box>
      <Container>
        <Grid container direction="row" className={classes.root}>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            md={6}
            lg={6}
            sm={12}
            xs={12}
          >
            <Grid container justify="flex-start"></Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            md={6}
            lg={6}
            sm={12}
            xs={12}
          >
            <Box>
              <Typography variant="h3" gutterBottom>
                NFTs Bio Link
              </Typography>
              <Grid container justify="center">
                <Typography variant="h6" className={classes.fonts}>
                  One link to show ‘em all
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
