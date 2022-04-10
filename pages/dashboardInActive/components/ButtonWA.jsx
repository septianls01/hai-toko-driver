import { Button } from '@material-ui/core';
import { ChatBubble } from '@material-ui/icons';
import React from 'react';
import style from 'styles/profile.module.css';

const redirectToWaCS = () => {
  window.location.href = 'https://wa.me/+6287719661272';
};

const ButtonWA = () => {
  return (
    <div>
      <center>
        <div className={style.buttonDone}>
          <Button className={style.ButtonCs} variant="outlined" color="error" onClick={redirectToWaCS}>
            <ChatBubble />
            Hubungi CS
          </Button>
        </div>
      </center>
    </div>
  );
};

export default ButtonWA;
