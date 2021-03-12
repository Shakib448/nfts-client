import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import twitter from "../../Images/twitter 1.png";
import telegram from "../../Images/telegram 1.png";
import linkedin from "../../Images/linkedin 1.png";

const useStyles = makeStyles((theme) => ({
  fonts: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#999999",
  },
  iconContentArea: {
    margin: "20px 0",
  },
  icon: {
    width: "41px",
    height: "41px",
    margin: "0 35px",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
}));

const HomeContents = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container justify="center">
        <Typography variant="h3" className={clsx(classes.title)}>
          NFTs Bio Link
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography variant="subtitle1" className="home__gradient" gutterBottom>
          NFTs bio is the only link you need. Stop spamming and start building
          your brand with one memorable URL. Create a beautiful profile to
          connect with your audience, showcase the NFT collections, or just to
          show off your favorite collectible. NFTs bio takes less than a minute
          to setup. It's easy to use, fun to share and free forever!
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={clsx(classes.iconContentArea)}
      >
        <img src={twitter} alt="twitter" className={clsx(classes.icon)} />
        <img src={telegram} alt="telegram" className={clsx(classes.icon)} />
        <img src={linkedin} alt="linkedin" className={clsx(classes.icon)} />
      </Grid>
    </Box>
  );
};

export default HomeContents;
