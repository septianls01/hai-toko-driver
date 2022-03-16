import React from 'react';
import styles from 'styles/detailPesanan.module.css';
import { Store, LocationOn } from '@material-ui/icons';

const Place = () => {
  return (
    <div>
      <div className={styles.location}>
        <div className={styles.market}>
          <Store className={styles.iconStore} />
          <div className={styles.textLocation}>
            <div className={styles.address}>Tk. Sembako Sejahtera Tlogosasri Raya. Kec. Pedurungan, Kota Semarang.</div>
            <div className={styles.Maps}>Buka Maps</div>
          </div>
        </div>

        <div className={styles.destination}>
          <LocationOn className={styles.iconLocationOn} />
          <div className={styles.textLocation}>
            <div className={styles.address}>Jl.Soekarno gang II no 21, Pedurungan raya Kec. Pedurungan, Kota Semarang</div>
            <div className={styles.Maps}>Buka Maps</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
