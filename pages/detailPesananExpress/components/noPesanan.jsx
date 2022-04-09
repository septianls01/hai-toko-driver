import React from 'react';
import styles from 'styles/detailPesananExpress.module.css';
import { Button, Container } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import CopyExample from './CopyExample';

const NoPesanan = () => {
  return (
    <div>
      <div className={styles.uniqeSend}>
        <Container>
          <div className={styles.contentTitle}>
            <div className={styles.titleSend}>No Pesanan</div>
            <div className={styles.titleNumber}>P000001</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.informationSend}>
          <div className={styles.informationTitle}>Informasi Pesanan</div>
          <hr className={styles.line} />
          <div className={styles.contentInformations}>
            <div className={styles.partInfo}>
              <div className={styles.info}>Tanggal Order</div>
              <div className={styles.infoNoChanges}>Senin, 12 Feb 2021</div>
            </div>
            <div className={styles.partInfo}>
              <div className={styles.info}>Waktu Order</div>
              <div className={styles.infoNoChanges}>13:40 WIB</div>
            </div>
            <div className={styles.partInfo}>
              <div className={styles.info}>Jenis Pengiriman</div>
              <div className={styles.infoNoChanges}>
                <Button className={styles.btnInfo} variant="contained">
                  Express
                </Button>
              </div>
            </div>
            <div className={styles.partInfo}>
              <div className={styles.info}>Tanggal Order</div>
              <div className={styles.infoNoChanges}>Senin, 12 Feb 2021</div>
            </div>
            <div className={styles.partInfo}>
              <div className={styles.info}>Waktu Pengiriman</div>
              <div className={styles.infoNoChanges}>14:00 WIB</div>
            </div>
          </div>
          <div className={styles.informationTitle}>Penerima</div>
          <hr className={styles.line} />
          <div className={styles.contentInformations}>
            <div className={styles.partInfo}>
              <div className={styles.info}>Nama</div>
              <div className={styles.infoNoChanges}>Johan Sulaiman</div>
            </div>
            <div className={styles.partInfo}>
              <div className={styles.info}>No.Telp</div>
              <div className={styles.infoNoChanges}>
                <CopyExample />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NoPesanan;
