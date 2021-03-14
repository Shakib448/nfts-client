import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import settings from "../../../Images/setting.png";
import btnIcon from "../../../Images/Vector.png";
import img1 from "../../../Images/un2.png";
import img2 from "../../../Images/un1.png";
import img3 from "../../../Images/un3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    margin: theme.spacing(2),
    borderRadius: "15px",
  },
  media: {
    height: 200,
  },
  settings: {
    position: "absolute",
    top: 10,
    left: 320,
  },
  collections: {
    marginLeft: theme.spacing(2),
  },
  collectionsBtn: {
    background: "transparent",
    marginLeft: theme.spacing(2),
    textTransform: "none",
    fontSize: 16,
    borderRadius: "15px",
  },
  img: {
    width: "15px",
    height: "15px",
  },
  settingImg: {
    width: "40px",
    height: "40px",
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
  exit: { y: "100vh", transition: { ease: "easeInOut" } },
};
const Collections = () => {
  const classes = useStyles();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box className={clsx(classes.settings)}>
        <IconButton>
          <img
            src={settings}
            alt="settings"
            className={clsx(classes.settingImg)}
          />
        </IconButton>
      </Box>
      <Grid container direction="row" className={clsx(classes.collections)}>
        <Typography variant="h4">Collections</Typography>
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
    </motion.div>
  );
};

const collection = [
  { name: "CryptoKitties", desc: "My nam Jeff", img: img1 },
  { name: "CryptoKitties", desc: "A Kitty...... A KRYPTOKITTY", img: img2 },
  { name: "CryptoKitties", desc: "Jeff Kaplan", img: img3 },
];

export default Collections;
