import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    width: "100%",
  },
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  accountFormButton: {
    borderRadius: "25px",
    fontSize: 20,
    padding: theme.spacing(1),
    background: "linear-gradient(45deg, #DAC3FC 30%, #97C5FC 90%)",
    textTransform: "none",
    boxShadow: "0px 12px 25px 5px rgba(142, 197, 252, 0.5)",
    width: "150px",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  account: {
    marginTop: theme.spacing(2),
  },
}));
const AccountForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid item container md={6} lg={6} sm={12}>
      <FormGroup className={clsx(classes.formControl)}>
        <Typography variant="h5">
          <Box fontWeight="fontWeightBold">Change Password</Box>
        </Typography>

        <FormControl className={clsx(classes.form)}>
          <TextField
            id="outlined-basic"
            label="Old Password"
            type="password"
            variant="outlined"
          />
        </FormControl>
        <FormControl className={clsx(classes.form)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>
      </FormGroup>
      <Grid item container justify="center">
        <Button variant="contained" className={clsx(classes.accountFormButton)}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default AccountForm;
