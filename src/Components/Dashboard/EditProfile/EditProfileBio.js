import {
  Grid,
  FormControl,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import LanguageIcon from "@material-ui/icons/Language";

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
              <InputAdornment position="start" style={{ paddingLeft: 0 }}>
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
    </Grid>
  );
};

export default EditProfileBio;
