import { Button } from '@material-ui/core';
import React from 'react';
import styles from 'styles/riwayatPengiriman.module.css';

const ButtonDay = () => {
  return (
    <div className={styles.button}>
        <Button className={styles.buttonHarian} size="small" variant="contained" href="#contained-buttons">
          Harian
        </Button>
        <Button className={styles.buttonBulan} size="small" variant="outlined" href="#outlined-buttons">
          Bulanan
        </Button>
    </div>
  );
};

export default ButtonDay;
