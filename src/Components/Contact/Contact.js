import {
  Button,
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
import img from "../../Images/Rectangle 58.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  contactArea: {
    padding: theme.spacing(4),
    background: "#fff",
    boxShadow: "5px 5px 50px lightgray",
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(4),
    },
  },
  formControl: {
    margin: theme.spacing(1),
  },
  form: { marginTop: theme.spacing(2), marginBottom: theme.spacing(2) },
  send: {
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
  forget: {
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "486px",
    marginTop: theme.spacing(3.85),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
      height: "480px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      marginTop: theme.spacing(2),
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

const Contact = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        className={clsx(classes.root)}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Grid
          className={clsx(classes.contactArea)}
          container
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          direction="column"
        >
          <Typography align="left" variant="h4">
            Contact Us
          </Typography>
          <FormGroup className={clsx(classes.formControl)}>
            <FormControl className={clsx(classes.form)}>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
            </FormControl>
            <FormControl className={clsx(classes.form)}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </FormControl>
            <FormControl className={clsx(classes.form)}>
              <TextField
                id="outlined-basic"
                label="What's on your mind?"
                variant="outlined"
                multiline
                rows={4}
                rowsMax={8}
              />
            </FormControl>
          </FormGroup>
          <Grid container justify="center">
            <Button variant="contained" className={clsx(classes.send)}>
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid container item md={6} lg={6} sm={12} xs={12}>
          <img src={img} alt="rectangle58" className={clsx(classes.image)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
