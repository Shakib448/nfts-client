import {
  Grid,
  FormControl,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  Box,
  Typography,
  IconButton,
  InputLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import camera from "../../../Images/camera 1.png";
import AddIcon from "@material-ui/icons/Add";
import img1 from "../../../Images/Rectangle 109.png";
import img2 from "../../../Images/Rectangle 110.png";
import img3 from "../../../Images/Rectangle 108.png";
import img4 from "../../../Images/Mask Group.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  formControl: {
    width: "60%",
  },
  form: { borderRadius: "25px" },
  ntfs: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    height: "58px",
    zIndex: "1",
    borderRadius: "25px",
    padding: "0 10px",
  },
  input: {
    display: "none",
  },
  camera: {
    width: 150,
    height: 150,
    background: "#C4C4C4",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".5s",
    "&:hover": {
      background: " rgba(0, 0, 0, 0.5)",
    },
  },
  img: {
    width: "35px",
    height: "35px",
  },
  forms: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  custom: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  customBtn: {
    marginRight: theme.spacing(1),
    borderRadius: "15px",
    width: "50px",
    height: "55px",
  },
  customForm: {
    width: "51.5%",
  },
  textColorForm: {
    width: "45.5%",
  },
  textColor: {
    marginTop: theme.spacing(2),
  },
  editBackground: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const EditProfileBio = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={clsx(classes.root)}>
      <Grid item container md={8} lg={8} sm={12} justify="center">
        <FormControl className={clsx(classes.formControl)}>
          <OutlinedInput
            id="input-with-icon-adornment"
            variant="outlined"
            className={clsx(classes.form)}
            startAdornment={
              <InputAdornment position="start">
                <Box className={clsx(classes.ntfs)}>
                  <LanguageIcon fontSize="large" />
                  <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">NFTs.bio/</Box>
                  </Typography>
                </Box>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        justify="center"
        className={clsx(classes.root)}
      >
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Box variants="div" className={clsx(classes.camera)}>
              <img src={camera} alt="camera" className={clsx(classes.img)} />
            </Box>
          </IconButton>
        </label>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        justify="center"
        className={clsx(classes.forms)}
      >
        <FormControl className={clsx(classes.formControl)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            labelWidth={45}
            className={clsx(classes.form)}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        justify="center"
        className={clsx(classes.forms)}
      >
        <FormControl className={clsx(classes.formControl)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-bio">Bio</InputLabel>
          <OutlinedInput
            id="outlined-adornment-bio"
            labelWidth={20}
            className={clsx(classes.form)}
            multiline
            rows={4}
            rowsMax={8}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        justify="center"
        alignItems="flex-end"
        className={clsx(classes.custom)}
      >
        <Box>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold">Icons</Box>
          </Typography>
          <Button variant="outlined" className={clsx(classes.customBtn)}>
            <AddIcon />
          </Button>
        </Box>
        <FormControl className={clsx(classes.customForm)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-custom-link">
            Custom Link
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-custom-link"
            labelWidth={90}
            className={clsx(classes.form)}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        justify="center"
        alignItems="center"
        className={clsx(classes.textColor)}
      >
        <Box mr={1}>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold">Text Color</Box>
          </Typography>
        </Box>
        <FormControl className={clsx(classes.textColorForm)}>
          <OutlinedInput
            id="input-with-icon-adornment"
            variant="outlined"
            className={clsx(classes.form)}
            startAdornment={
              <InputAdornment position="start" style={{ paddingLeft: "14px" }}>
                <Typography variant="h5">
                  <Box fontWeight="fontWeightBold">#</Box>
                </Typography>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid
        item
        container
        md={8}
        lg={8}
        sm={12}
        direction="column"
        className={clsx(classes.editBackground)}
      >
        <Box mt={4} mb={4}>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold">Background</Box>
          </Typography>
        </Box>
        <Grid item container justify="center" spacing={3}>
          {bgImage.map((item, index) => (
            <Grid item md={3} lg={3} sm={12} key={index}>
              <img
                src={item.img}
                alt="background"
                style={{ cursor: "pointer" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const bgImage = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

export default EditProfileBio;
