import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import ellipse1 from "../../Images/Ellipse 18.png";
import ellipse2 from "../../Images/Ellipse 19.png";
import twitter from "../../Images/twitter 1.png";
import telegram from "../../Images/telegram 1.png";
import linkedin from "../../Images/linkedin 1.png";
import "./Home.scss";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
  icon: {
    width: "41px",
    height: "41px",
    margin: "0 35px",
  },
  iconContentArea: {
    margin: "20px 0",
  },
}));

const imgAnimation = {
  anim: {
    scale: [1, 2, 2, 1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        variant="div"
        component={motion.div}
        variants={imgAnimation}
        animate="anim"
        className={clsx(classes.ellipse1)}
      >
        <img src={ellipse1} alt="top left" className={clsx(classes.img)} />
      </Box>
      <Box
        variant="div"
        component={motion.div}
        variants={imgAnimation}
        animate="anim"
        className={classes.ellipse2}
      >
        <img src={ellipse2} alt="top left" className={clsx(classes.img)} />
      </Box>
      <Container>
        <Grid container direction="row" className={clsx(classes.root)}>
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
              <Grid container justify="center">
                <Typography variant="h3">NFTs Bio Link</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography
                  variant="h6"
                  className={clsx(classes.fonts)}
                  gutterBottom
                >
                  One link to show ‘em all
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="home__gradient"
                  gutterBottom
                >
                  NFTs bio is the only link you need. Stop spamming and start
                  building your brand with one memorable URL. Create a beautiful
                  profile to connect with your audience, showcase the NFT
                  collections, or just to show off your favorite collectible.
                  NFTs bio takes less than a minute to setup. It's easy to use,
                  fun to share and free forever!
                </Typography>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="center"
                className={clsx(classes.iconContentArea)}
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className={clsx(classes.icon)}
                />
                <img
                  src={telegram}
                  alt="telegram"
                  className={clsx(classes.icon)}
                />
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={clsx(classes.icon)}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
