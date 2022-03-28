import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import styles from 'styles/riwayatPengirimanBulanan.module.css';
import { Link } from '@mui/material';

const Back = () => {
  return (
    <div className={styles.head}>
      <Link href="/dashboardSearch">
        <div className={styles.ArrowBack}>
          <ArrowBack />
        </div>
      </Link>
      <div className={styles.text}>Riwayat Pengiriman</div>
    </div>
  );
};

export default Back;
