import { Button } from '@material-ui/core';
import { Link } from '@mui/material';
import React from 'react';
import styles from 'styles/riwayatPengiriman.module.css';

const ButtonDay = () => {
  return (
    <div className={styles.button}>
      <Button className={styles.buttonHarian} size="small" variant="contained">
        Harian
      </Button>
      <Link href="/riwayat-pengiriman-bulanan" style={{ textDecoration: 'none' }}>
        <a>
          <Button className={styles.buttonBulan} size="small" variant="outlined">
            Bulanan
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default ButtonDay;
