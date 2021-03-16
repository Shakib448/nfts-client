import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import img1 from "../../../Images/verified 1.png";
import img2 from "../../../Images/contract 1.png";
import img3 from "../../../Images/on-off-button 1.png";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  btn: {
    width: 200,
    fontSize: 15,
    border: "none",
    marginBottom: theme.spacing(1),
  },
  img: { width: 30 },
}));

const AccountPolicy = () => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="outlined"
        startIcon={
          <img src={img1} alt="Term of use" className={clsx(classes.img)} />
        }
        className={clsx(classes.btn)}
      >
        <Box fontWeight="fontWeightBold"> Term of use</Box>
      </Button>
      <Button
        variant="outlined"
        startIcon={
          <img src={img2} alt="Privacy Policy" className={clsx(classes.img)} />
        }
        className={clsx(classes.btn)}
      >
        <Box fontWeight="fontWeightBold"> Privacy Policy</Box>
      </Button>
      <Button
        variant="outlined"
        startIcon={
          <img src={img3} alt="Logout" className={clsx(classes.img)} />
        }
        className={clsx(classes.btn)}
      >
        <Box fontWeight="fontWeightBold"> Logout</Box>
      </Button>
    </>
  );
};

export default AccountPolicy;
