import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

// define style
const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    width: '534px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% + 54px)',
      marginLeft: '-27px',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  contentPopUp: {
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: theme.palette.grey[500],
    marginBottom: 20,
  },
}));

const Component = (props) => {
  const { isOpen, onClose, driverStatus } = props;
  const [message, setMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (driverStatus === 'PENDING') {
      setMessage('Silahkan Hubungi Admin untuk melengkapi data diri dan berkas');
    } else if (driverStatus === 'UNVERIFIED') {
      setMessage('Data diri dan berkas masih diverifikasi, silahkan tunggu beberapa hari');
    } else if (driverStatus === 'VERIFIED') {
      setMessage('Menunggu Admin melakukan plotting ke Merchant');
    } else if (driverStatus === 'INACTIVE') {
      setMessage('Akun Anda telah di nonaktifkan, jika ingin mengaktifkan kembali silahkan menghubingi admin');
    }
  }, [driverStatus]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      className={classes.dialogContainer}
    >
      <DialogTitle>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.contentPopUp}>
        <Typography className={classes.title}>Status : {driverStatus}</Typography>
        <Typography className={classes.description}>{message}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Component;
