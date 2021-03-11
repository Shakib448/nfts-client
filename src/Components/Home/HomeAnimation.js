import { Box, makeStyles, Grid, Button } from "@material-ui/core";
import clsx from "clsx";
import img from "../../Images/robot.png";
import opensea from "../../Images/opensea.png";
import cryptopunk from "../../Images/cryptopunk.png";
import rarible from "../../Images/rarible.png";
import twitter from "../../Images/twitter.png";
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: "80px",
    },
  },
  img: {
    width: "100%",
    height: "auto",
  },
  linkBtn: {
    padding: "10px 30px",
    background: "linear-gradient(92.72deg, #96E6A1 4.69%, #D4FC79 93.45%)",
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: "bold",
    borderRadius: "30px",
    fontSize: "17px",
  },
}));

const HomeAnimation = () => {
  const classes = useStyles();

  return (
    <Box variant="div" className={clsx(classes.root)}>
      <Grid item>
        <img src={img} alt="primary" className={clsx(classes.img)} />
        <Box className="img-wrap">
          <img className="float1" src={opensea} alt="opensea" />
          <img className="float2" src={rarible} alt="rarible" />
          <img className="float3" src={cryptopunk} alt="cryptopunk" />
          <img className="float4" src={twitter} alt="twitter" />
        </Box>
      </Grid>
      <Grid item container justify="center">
        <Button className={clsx(classes.linkBtn)} variant="contained">
          https://nfts.bio/Joe
        </Button>
      </Grid>
    </Box>
  );
};

export default HomeAnimation;
