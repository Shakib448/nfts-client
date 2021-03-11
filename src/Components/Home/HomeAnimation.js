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
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));

const HomeAnimation = () => {
  const classes = useStyles();
  return (
    <>
      <Box variant="div" className={clsx(classes.root)}>
        {/* {animImage.map((item, index) => ( */}
        {/* <Grid item key={index} className={item.class}>
            <img src={item.img} alt="primary" />
          </Grid> */}
        {/* ))} */}
      </Box>
    </>
  );
};

const animImage = [
  {
    img: img1,
    alt: "primary button 1",
    class: "img1",
  },
  {
    img: img2,
    alt: "primary button 2",
    class: "img2",
  },
  {
    img: img3,
    alt: "primary button 3",
    class: "img3",
  },
  {
    img: img4,
    alt: "primary button 4",
    class: "img4",
  },
  {
    img: img5,
    alt: "primary button 5",
    class: "img5",
  },
  {
    img: img6,
    alt: "primary button 1",
    class: "img6",
  },
  {
    img: img7,
    alt: "primary button 7",
    class: "img7",
  },
];

export default HomeAnimation;
