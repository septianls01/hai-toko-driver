import React, { useState } from 'react';
import { Box, Button, FormHelperText, IconButton, InputAdornment, OutlinedInput, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Forum, Lock, Person, Visibility, VisibilityOff } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 35,
  },
  buttonSubmit: {
    marginTop: 30,
    background: theme.palette.primary.main,
    color: theme.palette.text.white,
    width: '90%',
    padding: 10,
    fontWeight: '600',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  buttonCS: {
    marginTop: 10,
    width: '90%',
    padding: 10,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  link: {
    color: theme.palette.text.link,
    cursor: 'pointer',
  },
  boxLink: {
    width: '90%',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  inputField: {
    width: '90%',
    marginTop: 10,
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  textError: {
    color: theme.palette.primary.main,
  },
  boxError: {
    width: '90%',
    textAlign: 'left',
    paddingTop: 1,
    paddingBottom: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  circularProgress: {
    color: '#ffff',
    fontSize: 10,
  },
}));

const Component = (props) => {
  const { onSubmitLogin, error, onChangeForm, auth } = props;
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onSubmit = (e) => {
    // stop submit
    e.preventDefault();
    const username = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    const payload = {
      username,
      password,
    };
    onSubmitLogin(payload);
  };

  const redirectToWaCS = () => {
    window.location.href = 'https://wa.me/+6287719661272';
  };

  return (
    <Box className={classes.formInput}>
      {error.status && (
        <Box className={classes.boxError}>
          <FormHelperText className={classes.textError}>{error.message}</FormHelperText>
        </Box>
      )}
      <form onSubmit={onSubmit}>
        <center>
          <OutlinedInput
            name="name"
            className={classes.inputField}
            placeholder="Username"
            onChange={() => onChangeForm()}
            startAdornment={
              <InputAdornment position="start" className={classes.icon}>
                <Person />
              </InputAdornment>
            }
          />
        </center>
        <center>
          <OutlinedInput
            name="password"
            className={classes.inputField}
            placeholder="Password"
            onChange={() => onChangeForm()}
            type={values.showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start" className={classes.icon}>
                <Lock />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </center>
        <center>
          <Button type="submit" variant="contained" className={classes.buttonSubmit}>
            {auth.loading ? <CircularProgress fontSize="small" className={classes.circularProgress} size={24} /> : 'Masuk'}
          </Button>
        </center>
        <center>
          <Button variant="outlined" className={classes.buttonCS} startIcon={<Forum />} onClick={redirectToWaCS}>
            Hubungi CS
          </Button>
        </center>
        <center>
          <Box className={classes.boxLink} style={{ marginTop: 5 }}>
            <Box style={{ display: 'flex' }}>
              <Typography>Belum punya akun?</Typography>
              <Box style={{ flex: 1 }}>
                <Link href="/pendaftaran">
                  <Typography className={classes.link} style={{ marginLeft: 10 }}>
                    Daftar disini
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </center>
      </form>
    </Box>
  );
};

export default Component;
