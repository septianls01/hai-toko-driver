import React from "react";
import { ArrowBack } from "@material-ui/icons";
import styles from "styles/listMerchant.module.css";
import Link from "next/link";

const Back = () => {
  return (
    <div>
      <Link href="/profileMerchant">
        <a className={styles.headPage}>
          <ArrowBack className={styles.iconBack} />

          <div className={styles.textHeadPage}>Lihat Merchant</div>
        </a>
      </Link>
    </div>
  );
};

export default Back;
