import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import styles from 'styles/detailPesananTerjadwal.module.css';

const Back = () => {
  return (
    <div to="/" className={styles.head}>
      <div className={styles.ArrowBack}>
        <ArrowBack />
      </div>
      <div className={styles.text}>Detail Pesanan</div>
    </div>
  );
};

export default Back;
