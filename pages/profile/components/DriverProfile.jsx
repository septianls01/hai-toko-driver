import { Person } from '@material-ui/icons';
import React from 'react';
import style from 'styles/profile.module.css';

const DriverProfile = () => {
  return (
    <div>
      <div className={style.headDriver}>
        <Person className={style.iconHead} />
        <div className={style.textDriver}>Akun</div>
      </div>
      <div className={style.mainProfile}>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Email</div>
          <div className={style.accountDriver}>johan.sulai@gmail.com</div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Nomor Telepon (WA)</div>
          <div className={style.accountDriver}>+6281 2393 9401</div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Username</div>
          <div className={style.accountDriver}>johan123</div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Password</div>
          <div className={style.passAccountDriver}>Ganti Password </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
