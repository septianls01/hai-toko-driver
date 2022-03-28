import React from 'react';
import Image from 'next/image';
import styles from 'styles/contentPending.module.css';

const ContentPending = () => {
  return (
    <div style={{ border: '1px solid', borderRadius: 8, borderColor: ' #c3cfd9' }}>
      <center>
        <div style={{ padding: '80px 0 20px' }} className={styles.content}>
          <Image src="/assets/iconSand.png" alt="icon" width={120} height={140} />
          <h3 style={{ width: '70%' }} className={styles.textBold}>
            Menunggu Data Anda Verifikasi Oleh Admin
          </h3>
          <p style={{ color: '#788896', width: '70%', fontWeight: 500 }} lassName={styles.text}>
            Data anda sudah kami terima, Selanjutnya Silahkan tunggu diverifikasi & dihubungi admin
          </p>
          <p style={{ color: '#788896', width: '70%', fontWeight: 500 }} lassName={styles.text}>
            Paling lama 3-5 hari kerja
          </p>
        </div>
      </center>
    </div>
  );
};

export default ContentPending;
