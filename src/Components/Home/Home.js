import { Container, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import HomeContents from "./HomeContents";
import "./Home.scss";
import HomeAnimation from "./HomeAnimation";
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
}));

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Home = () => {
  const classes = useStyles();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
            <Grid container justify="center">
              <HomeAnimation />
            </Grid>
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
            <HomeContents />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Home;
