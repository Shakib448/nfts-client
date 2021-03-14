import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileBar } from "../../Shared/MobileBar/MobileBar";
import NavigationBar from "../../Shared/NavigationBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: theme.spacing(6),
  },
  singUpArea: {
    padding: theme.spacing(4),
    background: "#fff",
    boxShadow: "5px 5px 50px lightgray",
    borderRadius: "40px",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  form: { marginTop: theme.spacing(2), marginBottom: theme.spacing(2) },
  singUpBtn: {
    borderRadius: "25px",
    fontSize: 20,
    padding: theme.spacing(1),
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    textTransform: "none",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    width: "150px",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  account: {
    marginTop: theme.spacing(2),
  },
  link: {
    color: "black",
    cursor: "pointer",

    "&:hover": {
      color: "black",
    },
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

const SingUp = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <NavigationBar />
      <MobileBar />
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={clsx(classes.root)}
        >
          <Grid
            className={clsx(classes.singUpArea)}
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
              Welcome
            </Typography>
            <FormGroup className={clsx(classes.formControl)}>
              <FormControl className={clsx(classes.form)}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </FormControl>
              <FormControl className={clsx(classes.form)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={75}
                />
              </FormControl>
            </FormGroup>
            <Grid container justify="center">
              <Button variant="contained" className={clsx(classes.singUpBtn)}>
                Register
              </Button>
            </Grid>
            <Grid container justify="center">
              <Typography variant="subtitle1" className={clsx(classes.account)}>
                Already Have an account?
                <u>
                  <Link to="/login" className={clsx(classes.link)}>
                    Signin
                  </Link>
                </u>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingUp;
