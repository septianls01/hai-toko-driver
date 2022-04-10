import React from 'react';
import Image from 'next/image';
import styles from 'styles/contentPending.module.css';
import ButtonWA from './ButtonWA';

const ContentPending = () => {
  return (
    <div>
      <center>
        <div style={{ padding: '150px 0 20px' }} className={styles.content}>
          <Image src="/assets/icon_unverified.png" alt="icon Profile" width={140} height={140} />
          <h3 style={{ width: '70%' }} className={styles.textBold}>
            Akun Anda telah dinonaktifkan
          </h3>
          <p style={{ color: '#788896', width: '70%' }} lassName={styles.text}>
            Untuk mengaktifkan Akun ini lagi silahkan hubungi Admin
          </p>
        </div>
        <ButtonWA />
      </center>
    </div>
  );
};

export default ContentPending;
