import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: 50,
    width: 253,
    height: 236,
  },
  welcomeDriver: {
    marginTop: 30,
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },
  welcomeSub: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));

const Component = () => {
  const classes = useStyles();

  return (
    <Box>
      <center>
        <img className={classes.image} src="/assets/pppp.png" alt="Logo"  />
      </center>
      <Typography className={classes.welcomeDriver}>Hai, Driver!</Typography>
      <Typography className={classes.welcomeSub}>Selamat datang di aplikasi HaiToko</Typography>
    </Box>
  );
};

export default Component;
