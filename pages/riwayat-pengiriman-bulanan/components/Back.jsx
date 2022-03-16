import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import styles from 'styles/riwayatPengirimanBulanan.module.css';

const Back = () => {
  return (
    <div to="/" className={styles.head}>
      <div className={styles.ArrowBack}>
        <ArrowBack />
      </div>
      <div className={styles.text}>Riwayat Pengiriman</div>
    </div>
  );
};

export default Back;
