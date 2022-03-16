import { Notifications } from '@material-ui/icons';
import { Grid, Switch } from '@mui/material';
import React from 'react';
import style from 'styles/profile.module.css';

const Remember = () => {
  return (
    <div>
      <div className={style.headDriver}>
        <Notifications className={style.iconHead} />
        <div className={style.textDriver}>Pesan Pengingat</div>
      </div>
      <div className={style.mainRemember}>
        <div className={style.informationDriver}>Kirimkan pesan ke nomor WA saya</div>
        <div className={style.contentSwitch}>
          <Grid xs={9} className={style.textSwitchDapri}>
            ketika ada order baru yang masuk dari merchant
          </Grid>
          <Grid xs={3} className={style.switchDriver}>
            <Switch />
          </Grid>
        </div>
        <div className={style.contentSwitch}>
          <Grid xs={9} className={style.textSwitchDapri}>
            15 menit sebelum jam pengiriman order
          </Grid>
          <Grid xs={3} className={style.switchDriver}>
            <Switch />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Remember;
