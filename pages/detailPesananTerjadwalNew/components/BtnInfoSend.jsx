import React from 'react';
import { Button } from '@material-ui/core';
import styles from 'styles/detailPesananTerjadwal.module.css';
import { WhatsApp } from '@material-ui/icons';

const btnInfoSend = () => {
  return (
    <div>
      <div className={styles.btnWa}>
        <Button className={styles.Wa}>
          <WhatsApp className={styles.btnWA} />
          Hubungan Penerima
        </Button>
      </div>
    </div>
  );
};

export default btnInfoSend;
