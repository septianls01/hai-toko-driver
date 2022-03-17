import React from "react";
import { Storefront } from "@material-ui/icons";
import styles from "styles/listMerchant.module.css";

const Merchant = () => {
  return (
    <div>
      <div className={styles.textMerchant}>Daftar merchant</div>
      <div className={styles.merchantStore}>
        <Storefront className={styles.iconStore} />
        <div className={styles.informationStore}>
          <div className={styles.nameStore}>Toko Toserba Bima</div>
          <div className={styles.addressMerchant}>40, jl.Pedurungan Lor IV</div>
        </div>
      </div>
      <div className={styles.merchantStore}>
        <Storefront className={styles.iconStore} />
        <div className={styles.informationStore}>
          <div className={styles.nameStore}>Toko Toserba Bima</div>
          <div className={styles.addressMerchant}>40, jl.Pedurungan Lor IV</div>
        </div>
      </div>
      <div className={styles.merchantStore}>
        <Storefront className={styles.iconStore} />
        <div className={styles.informationStore}>
          <div className={styles.nameStore}>Toko Toserba Bima</div>
          <div className={styles.addressMerchant}>40, jl.Pedurungan Lor IV</div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
