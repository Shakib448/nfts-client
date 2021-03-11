import { Container, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
// import ellipse1 from "../../Images/Ellipse 18.png";
// import ellipse2 from "../../Images/Ellipse 19.png";
// import { motion } from "framer-motion";
import HomeContents from "./HomeContents";
import "./Home.scss";
import HomeAnimation from "./HomeAnimation";

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

// const imgAnimation = {
//   anim: {
//     scale: [1, 2, 2, 1, 1],
//     transition: {
//       duration: 5,
//       repeat: Infinity,
//     },
//   },
// };

const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Box
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
      </Box> */}
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
    </>
  );
};

export default Home;
