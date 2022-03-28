import { Button } from '@material-ui/core';
import { ChatBubble } from '@material-ui/icons';
import React from 'react';
import style from 'styles/profile.module.css';

const redirectToWaCS = () => {
  window.location.href = 'https://wa.me/+6287719661272';
};

const ButtonProfile = () => {
  return (
    <div>
      <center>
        <div className={style.buttonDone}>
          <Button className={style.ButtonCs} variant="outlined" color="error" onClick={redirectToWaCS}>
            <ChatBubble />
            Hubungi CS
          </Button>
        </div>
        <div className={style.buttonDone}>
          <Button style={{ color: '#d55065' }} className={style.ButtonLogout} variant="outlined" href="#contained-buttons">
            Logout
          </Button>
        </div>
      </center>
    </div>
  );
};

export default ButtonProfile;
