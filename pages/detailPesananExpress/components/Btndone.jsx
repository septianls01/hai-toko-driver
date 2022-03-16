import React from 'react';
import { Button } from '@material-ui/core';
import styles from 'styles/detailPesananExpress.module.css';

const Btndone = () => {
  return (
    <div className={styles.Done}>
      <Button className={styles.buttonHarian}>Pengiriman Selesai</Button>
    </div>
  );
};

export default Btndone;
