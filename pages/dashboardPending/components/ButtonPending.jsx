import { Button } from '@material-ui/core';
import { ArrowRightAlt, ChatBubble } from '@material-ui/icons';
import { Link } from '@mui/material';
import React from 'react';
import style from 'styles/profile.module.css';

const redirectToWaCS = () => {
  window.location.href = 'https://wa.me/+6287719661272';
};

const ButtonPending = () => {
  return (
    <div>
      <center>
        <div className={style.buttonDone}>
          <Link style={{ textDecoration: 'noun', paddingTop: '40px' }}>
            <Button style={{ color: '#fff', backgroundColor: '#d55065' }} className={style.ButtonLogout} variant="outlined" href="/pemberkasan">
              upload Sekarang
              <ArrowRightAlt />
            </Button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default ButtonPending;
