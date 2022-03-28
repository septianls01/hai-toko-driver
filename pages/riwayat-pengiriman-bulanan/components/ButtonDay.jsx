import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/riwayatPengirimanBulanan.module.css';

const ButtonDay = () => {
  return (
    <div className={styles.button}>
      <Link href="/riwayat-pengiriman">
        <a>
          <Button className={styles.buttonHarian} size="small" variant="outlined">
            Harian
          </Button>
        </a>
      </Link>
      <Button className={styles.buttonBulan} size="small" variant="contained" href="#outlined-buttons">
        Bulanan
      </Button>
    </div>
  );
};

export default ButtonDay;
