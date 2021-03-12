import {
  Container,
  FormControl,
  FormGroup,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}));

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Login = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={clsx(classes.root)}
      >
        <Grid
          container
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          direction="column"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Typography align="center" variant="h3">
            Welcome Back
          </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
