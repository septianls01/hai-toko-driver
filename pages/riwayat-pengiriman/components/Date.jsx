import React from 'react';
import styles from 'styles/riwayatPengiriman.module.css';
import Daily from './Daily';

const Date = () => {
  return (
    <div>
      <center>
        <div className={styles.dates}>
          {/* <div className={styles.date}>13/09</div>
          <div className={styles.date}>14/09</div>
          <div className={styles.date}>15/09</div>
          <div className={styles.date}>Kemarin</div>
          <div className={styles.date}>Hari ini</div> */}
          <div className={styles.iconDate}>
            <Daily />
          </div>
        </div>
      </center>
      <div className={styles.day}>Senin, 17 Sep 2021</div>
    </div>
  );
};

export default Date;
