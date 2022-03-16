import { EmojiEvents, Home } from '@material-ui/icons';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import style from 'styles/profileMerchant.module.css';

const Account = () => {
  return (
    <div>
      <center>
        <div className={style.accountSection}>
          <Grid xs={4} className={style.accountDriverPhoto}>
            <Image src="/assets/avatar.png" alt="logoProfile" width={100} height={100} className={style.imgLogo} />
            <div className={style.changePhoto}>Ubah Foto</div>
          </Grid>
          <Grid xs={8} className={style.accountDriverText}>
            <div className={style.nameProfile}>Johan Sulaiman</div>
            <div className={style.linkLeaderboard}>
              <EmojiEvents />
              <div className={style.textEmojiEvents}>Lihat Leaderboard</div>
            </div>
            <div className={style.linkMerchant}>
              <Home />
              <div className={style.textHome}>Lihat Merchant</div>
            </div>
          </Grid>
        </div>

        <Box className={style.boxPoint}>
          <center>
            <div className={style.contentPoint}>
              <Grid xs={4} className={style.pointDriver}>
                <div className={style.textPoint}>Poin Saya</div>
                <div className={style.numberPoint}>9.300</div>
              </Grid>
              <Grid xs={8} className={style.salaryDay}>
                <div className={style.textPoint}>Penghasilan Hari Ini</div>
                <div className={style.numberPoint}>Rp. 18.000</div>
              </Grid>
            </div>
          </center>
        </Box>
      </center>
    </div>
  );
};

export default Account;
