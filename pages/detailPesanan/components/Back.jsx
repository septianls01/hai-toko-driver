import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import styles from 'styles/detailPesanan.module.css';
import { Link } from '@mui/material';

const Back = () => {
  return (
    <div className={styles.head}>
      <Link href="/dashboardempty">
        <a>
          <div className={styles.ArrowBack}>
            <ArrowBack />
          </div>
        </a>
      </Link>
      <div className={styles.text}>Detail Pesanan</div>
    </div>
  );
};

export default Back;
