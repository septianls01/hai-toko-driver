import React from 'react';
import styles from 'styles/detailPesanan.module.css';

function Order() {
  return (
    <div className={styles.sectionOrder}>
      <div className={styles.OrderTitle}>
        <div className={styles.titleLeft}>Pesanan</div>
        <div className={styles.titleRight}>2 Produk</div>
      </div>
      <hr className={styles.line} />
      <div className={styles.contentOrdered}>
        <div className={styles.menu}>
          <div className={styles.subtextMenu}>Minyak Tropicanaslim</div>
          <div className={styles.menuOrdered}>
            <div className={styles.textMenu}> Rp.20.000</div>
            <div className={styles.textMenu}>3x</div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.subtextMenu}>Minyak Tropicanaslim</div>
          <div className={styles.menuOrdered}>
            <div className={styles.textMenu}> Rp.20.000</div>
            <div className={styles.textMenu}>3x</div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.totalPrice}>
        <div className={styles.priceLeft}>Total Harga</div>
        <div className={styles.priceRight}>Rp. 74.500</div>
      </div>
    </div>
  );
}

export default Order;
