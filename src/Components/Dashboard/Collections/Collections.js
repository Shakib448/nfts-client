import {
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
import btnIcon from "../../../Images/Vector.png";
import img1 from "../../../Images/un2.png";
import img2 from "../../../Images/un1.png";
import img3 from "../../../Images/un3.png";
import Settings from "../DahsBoardCommon/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    margin: theme.spacing(2),
    borderRadius: "15px",
  },
  media: {
    height: 200,
  },

  collections: {
    marginLeft: theme.spacing(2),
  },
  collectionsBtn: {
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
    width: "15px",
    height: "15px",
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

const Collections = () => {
  const classes = useStyles();
  return (
    <>
      <Settings showConnect={false} />
      <Grid container direction="row" className={clsx(classes.collections)}>
        <Typography variant="h3" gutterBottom>
          Collections
        </Typography>
        <Button
          variant="outlined"
          className={clsx(classes.collectionsBtn)}
          startIcon={
            <img src={btnIcon} alt="fileIcon" className={clsx(classes.img)} />
          }
        >
          New Collection
        </Button>
      </Grid>
      <Grid container direction="row" className={clsx(classes.collections)}>
        <Typography variant="h3">Collection 1 ...</Typography>
      </Grid>

      <Grid container direction="row">
        {collection.map((item, index) => (
          <Card className={clsx(classes.root)} key={index}>
            <CardActionArea>
              <CardMedia
                className={clsx(classes.media)}
                image={item.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.name}
                </Typography>
                <Typography variant="h5" component="h5">
                  {item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" className={clsx(classes.collectionConBtn)}>
          Continue
        </Button>
      </Grid>
    </>
    // </motion.div>
  );
};

const collection = [
  { name: "CryptoKitties", desc: "My nam Jeff", img: img1 },
  { name: "CryptoKitties", desc: "A Kitty...... A KRYPTOKITTY", img: img2 },
  { name: "CryptoKitties", desc: "Jeff Kaplan", img: img3 },
];

export default Collections;
