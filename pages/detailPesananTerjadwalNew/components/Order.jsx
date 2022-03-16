import React from 'react';
import styles from 'styles/detailPesananTerjadwal.module.css';

function Order() {
  return (
    <div className={styles.sectionOrder}>
      <div className={styles.OrderTitle}>
        <div className={styles.titleLeft}>Pesanan</div>
        <div className={styles.titleRight}>2 Produk</div>
      </div>
      <hr className={styles.line} />
      <div className={styles.contentOrdered}>
        <div className={styles.menuOrdered}>
          <div className={styles.menu}>
            <div className={styles.subtextMenu}>Minyak Tropicanaslim</div>
            <div className={styles.textMenu}>3 X Rp.20.000</div>
          </div>
          <div className={styles.price}>Rp. 60.000</div>
        </div>
        <div className={styles.menuOrdered}>
          <div className={styles.menu}>
            <div className={styles.subtextMenu}>Minyak Tropicanaslim</div>
            <div className={styles.textMenu}>3 X Rp.20.000</div>
          </div>
          <div className={styles.price}>Rp. 60.000</div>
        </div>
        <div className={styles.shipping}>
          <div className={styles.shippingLeft}>Tips Pengiriman</div>
          <div className={styles.shippingRight}>Rp. 4.500</div>
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
