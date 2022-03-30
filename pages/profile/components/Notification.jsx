import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid, Switch } from '@mui/material';
import { render } from 'express/lib/response';

toast.configure();

function Notification() {
  constructor = (props) => {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick = (e) => {
    toast.info('Hallo Pesanan anda akan sampai dalam waktu 15 menit 😊', { autoClose: 5000 });
  };

  // handleChange = (e) => {
  //   toast.info('Hallo Pesanan anda akan sampai dalam waktu 15 menit 😊', { autoClose: 5000 });
  //   // e.preventDefault();
  // };

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // const notify = () => {
  //   // inbuilt-notification
  //   toast.info('Hallo Pesanan anda akan sampai dalam waktu 15 menit 😊', { autoClose: 5000 });
  // };
  render = () => {
    return (
      <div className="GeeksforGeeks">
        <Grid xs={3}>
          <Switch onChange={this.handleChange} />
          {toggle ? <span>fafsafs</span> : null}
        </Grid>
        <button onClick={notify}>Click Me!</button>
      </div>
    );
  };
}
export default Notification;
