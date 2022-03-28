import React from 'react';
import Image from 'next/image';
import styles from 'styles/contentPending.module.css';
import ButtonPending from './ButtonPending';

const ContentPending = () => {
  return (
    <div style={{ border: '1px solid', borderRadius: 8, borderColor: ' #c3cfd9' }}>
      <center>
        <div style={{ padding: '80px 0 20px' }} className={styles.content}>
          <Image src="/assets/icon-profile.png" alt="icon Profile" width={120} height={90} />
          <h3 style={{ width: '70%' }} className={styles.textBold}>
            Lengkapi Surat-surat penting untuk data anda!
          </h3>
          <p style={{ color: '#788896', width: '70%' }} lassName={styles.text}>
            Upload scan KTP,SIM & STNK dengan format PDF
          </p>
        </div>
        <ButtonPending />
      </center>
    </div>
  );
};

export default ContentPending;
