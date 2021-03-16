import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";
import starIcon from "../../../Images/star.png";
import img from "../../../Images/un2.png";
import CountDown from "../DahsBoardCommon/CountDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: theme.spacing(1),
    borderRadius: "15px",
  },
  media: {
    height: 300,
  },

  feature: {
    marginLeft: theme.spacing(2),
  },
  featureBtn: {
    borderRadius: "15px",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  img: {
    width: "25px",
    height: "25px",
  },
  featureButton: {
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    borderRadius: "15px",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  auction: {
    color: "#745297",
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <>
      <Settings showConnect={false} />
      <Grid container direction="row" className={clsx(classes.feature)}>
        <Typography variant="h3">
          <Box fontWeight="fontWeightBold">Feature NFT</Box>
        </Typography>
        <Button
          variant="outlined"
          className={clsx(classes.featureBtn)}
          startIcon={
            <img src={starIcon} alt="fileIcon" className={clsx(classes.img)} />
          }
        >
          New Feature
        </Button>
      </Grid>
      <Grid container direction="row" className={clsx(classes.collections)}>
        <Grid item lg={4} md={4} sm={12}>
          <Card className={clsx(classes.root)}>
            <CardActionArea>
              <CardMedia
                className={clsx(classes.media)}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  CryptoKitties
                </Typography>
                <Typography variant="h5" component="h4">
                  <Box fontWeight="fontWeightBold">My nam Jeff</Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item container lg={6} md={6} sm={12}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="h4" className={clsx(classes.auction)}>
              Auction ending in
            </Typography>

            <CountDown />

            <Grid container justify="center">
              <Button
                variant="contained"
                className={clsx(classes.featureButton)}
              >
                Make Offer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Button variant="contained" className={clsx(classes.featureButton)}>
          Continue
        </Button>
      </Grid>
    </>
  );
};

export default Feature;
