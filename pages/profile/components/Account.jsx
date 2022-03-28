import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import style from 'styles/profile.module.css';

const Account = () => {
  return (
    <div>
      <center>
        <Image src="/assets/avatar.png" alt="logoProfile" width={100} height={100} className={style.imgLogo} />
        <div className={style.nameProfile}>Johan Sulaiman</div>
        <div className={style.changePhoto}>Ubah Foto</div>
      </center>
      <Box className={style.boxPoint}>
        <div className={style.contentPoint}>
          <div className={style.textPoint}>Poin Saya</div>
          <div className={style.Point}>
            <div className={style.numberPoint}>9.300</div>
            <Link href="/leaderboard" style={{ textDecoration: 'none' }}>
              <div className={style.leaderBoard}>Lihat Leaderboard</div>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Account;
