import React from 'react';
import style from 'styles/profile.module.css';
import { TwoWheeler } from '@material-ui/icons';
// import { Grid } from '@mui/material';

const Vehicle = () => {
  return (
    <div>
      <div className={style.headDriver}>
        <TwoWheeler className={style.iconHead} />
        <div className={style.textDriver}>Kendaraan</div>
      </div>
      <div className={style.mainVehicle}>
        <div className={style.twoPart}>
          <div className={style.onePart}>
            <div className={style.contentDapri}>Merk</div>
            <div className={style.accountDriver}>Honda Beat</div>
          </div>
          <div className={style.onePart}>
            <div className={style.contentDapri}>Nomor Kendaraan</div>
            <div className={style.accountDriver}>K 302KQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
