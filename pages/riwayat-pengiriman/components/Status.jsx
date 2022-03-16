import React from 'react';
import styles from 'styles/riwayatPengiriman.module.css';
import Box from '@mui/material/Box';
import { CheckCircle, LocalShipping } from '@material-ui/icons';

const Status = () => {
  return (
    <div className={styles.status}>
      <Box className={styles.deliveryComplete}>
        <div className={styles.size}>
          <div className={styles.titleShipping}>
            <CheckCircle className={styles.iconShipping} />
            pengiriman selesai
          </div>
          <div className={styles.subTitleShipping}>
            <span className={styles.textBold}>15</span> dari 17
          </div>
        </div>
      </Box>
      <Box className={styles.notYetSent}>
        <div className={styles.size}>
          <div className={styles.titleShipping}>
            <LocalShipping className={styles.iconShipping} />
            Belum Dikirim
          </div>
          <div className={styles.subTitleShipping}>
            <span className={styles.textBold}>15</span>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Status;
