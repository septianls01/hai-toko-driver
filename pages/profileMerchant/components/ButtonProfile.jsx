import { Button } from '@material-ui/core';
import { ChatBubble } from '@material-ui/icons';
import React from 'react';
import style from 'styles/profile.module.css';

const ButtonProfile = () => {
  return (
    <div>
      <center>
        <div className={style.buttonDone}>
          <Button className={style.ButtonCs} variant="outlined" color="error" href="#contained-buttons">
            <ChatBubble />
            Hubungi CS
          </Button>
        </div>
        <div className={style.buttonDone}>
          <Button className={style.ButtonLogout} variant="outlined" href="#contained-buttons">
            Error
          </Button>
        </div>
      </center>
    </div>
  );
};

export default ButtonProfile;
