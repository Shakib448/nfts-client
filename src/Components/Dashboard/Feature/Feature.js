import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Settings from "../DahsBoardCommon/Settings";
import starIcon from "../../../Images/star.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    margin: theme.spacing(2),
    borderRadius: "15px",
  },
  media: {
    height: 200,
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

  collectionConBtn: {
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
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <>
      <Settings showConnect={false} />
      <Grid container direction="row" className={clsx(classes.feature)}>
        <Typography variant="h3" gutterBottom>
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
        <Typography variant="h3">Collection 1 ...</Typography>
      </Grid>

      <Grid container justify="center">
        <Button variant="contained" className={clsx(classes.collectionConBtn)}>
          Continue
        </Button>
      </Grid>
    </>
  );
};

export default Feature;
