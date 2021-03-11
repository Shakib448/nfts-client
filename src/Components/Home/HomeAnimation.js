import { Box, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import img1 from "../../Images/Primary button-1.png";
import img2 from "../../Images/Primary button-2.png";
import img3 from "../../Images/Primary button-3.png";
import img4 from "../../Images/Primary button-4.png";
import img5 from "../../Images/Primary button-5.png";
import img6 from "../../Images/Primary button-6.png";
import img7 from "../../Images/Primary button.png";

const useStyles = makeStyles((theme) => ({}));

const HomeAnimation = () => {
  const classes = useStyles();
  return (
    <>
      <Box variant="div">
        <Grid item>
          <img src={img1} alt="primary" />
        </Grid>
      </Box>
    </>
  );
};

export default HomeAnimation;
