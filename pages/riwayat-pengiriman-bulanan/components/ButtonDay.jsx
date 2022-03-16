import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/riwayatPengirimanBulanan.module.css';

const ButtonDay = () => {
  return (
    <div className={styles.button}>
      <a href="https://nextjs.org/learn/basics/navigate-between-pages/link-component">
        <Button className={styles.buttonHarian} size="small" variant="outlined"  href="#contained-buttons">
          Harian
        </Button>
      </a>
      <a href="https://mui.com/components/material-icons/?query=locat">
        <Button className={styles.buttonBulan} size="small"  variant="contained" href="#outlined-buttons">
          Bulanan
        </Button>
      </a>
    </div>
  );
};

export default ButtonDay;
