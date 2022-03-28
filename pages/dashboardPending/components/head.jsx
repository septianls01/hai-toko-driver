import { AccountCircle } from '@material-ui/icons';
import { Link } from '@mui/material';
import React from 'react';
import styles from '/styles/Head.module.css';

const Head = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }} className={styles.header}>
        <div className={styles.wrapper}>
          <img className={styles.image} src="/assets/HiToko.png" alt="Logo" />
          <p className={styles.title}>Driver</p>
        </div>
        <div className={styles.icons}>
          <Link href="/profile">
            <AccountCircle className={styles.icon} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;
