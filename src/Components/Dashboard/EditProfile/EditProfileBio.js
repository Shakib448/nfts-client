import {
  Grid,
  FormControl,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import camera from "../../../Images/camera 1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: "50%",
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
  img: { width: "35px", height: "35px" },
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
    </Grid>
  );
};

export default EditProfileBio;
