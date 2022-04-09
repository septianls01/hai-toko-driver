import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#1aae9f;'),
    backgroundColor: '#d3455b;',
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0 16px 0',
    color: '#fff',
    fontSize: '16px',
    width: '100%',
    padding: '8px 0',
  }));

  return (
    <div>
      <ColorButton variant="contained" onClick={handleClickOpen}>
        PENGIRIMAN SELESAI
      </ColorButton>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{'Pengiriman Selesai?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">Beritahu merchant bahwa pesanan P000001 telah selesai dikirim</DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ borderColor: '#bec4ca', color: '#4b5c6b', marginRight: 10 }} variant="outlined" onClick={handleClose}>
            Batal
          </Button>
          <Button style={{ backgroundColor: '#d3455b', color: '#fff', marginLeft: 10 }} variant="contained" onClick={handleClose}>
            Kirim Pesan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
