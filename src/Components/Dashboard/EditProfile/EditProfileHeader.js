import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  editBtn: {
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    borderRadius: "15px",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    textTransform: "none",
    fontSize: 20,
  },
}));

const EditProfileHeader = () => {
  const classes = useStyles();
  return (
    <Grid item container justify="space-between" className={clsx(classes.root)}>
      <Typography variant="h3">
        <Box fontWeight="fontWeightBold">Edit Profile</Box>
      </Typography>
      <Button variant="contained" className={clsx(classes.editBtn)}>
        Save
      </Button>
    </Grid>
  );
};

export default EditProfileHeader;
