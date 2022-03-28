import React from 'react';
import styles from 'styles/riwayatPengiriman.module.css';
import Box from '@mui/material/Box';
import { Store, LocationOn } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from '@mui/material';

const Merchant = () => {
  return (
    <div>
      <div className={styles.stores}>
        <Link style={{ textDecoration: 'none' }} href="/detailPesanan">
          <Box className={styles.store}>
            <div className={styles.headStore}>
              <Button className={styles.storeInfo} variant="contained">
                Express
              </Button>
              <div className={styles.timesStore}>
                <div className={styles.timeStore}>11 Feb 2021</div>
                <div className={styles.timeStore}>14.31</div>
              </div>
            </div>
            <div className={styles.contentpart}>
              <div className={styles.ordered}>Total pesanan 12 produk</div>
              <div className={styles.price}>Rp. 23.000</div>
            </div>
            <div className={styles.location}>
              <div className={styles.market}>
                <Store className={styles.iconStore} />
                <div className={styles.address}>Tk. Sembako Sejahtera Tlogosasri Raya</div>
              </div>
              <div className={styles.destination}>
                <LocationOn className={styles.iconLocationOn} />
                <div className={styles.address}>Jl.Soekarno gang II no 21, Pedurungan raya</div>
              </div>
            </div>
          </Box>
        </Link>
      </div>
      <div className={styles.stores}>
        <Link style={{ textDecoration: 'none' }} href="/detailPesanan">
          <Box className={styles.store}>
            <div className={styles.headStore}>
              <Button className={styles.storeInfo} variant="contained">
                Express
              </Button>
              <div className={styles.timesStore}>
                <div className={styles.timeStore}>11 Feb 2021</div>
                <div className={styles.timeStore}>14.31</div>
              </div>
            </div>
            <div className={styles.contentpart}>
              <div className={styles.ordered}>Total pesanan 12 produk</div>
              <div className={styles.price}>Rp. 23.000</div>
            </div>
            <div className={styles.location}>
              <div className={styles.market}>
                <Store className={styles.iconStore} />
                <div className={styles.address}>Tk. aman jaya</div>
              </div>
              <div className={styles.destination}>
                <LocationOn className={styles.iconLocationOn} />
                <div className={styles.address}>Jl.Soekarno gang II no 21, Pedurungan raya</div>
              </div>
            </div>
          </Box>
        </Link>
      </div>
      <div className={styles.stores}>
        <Link style={{ textDecoration: 'none' }} href="/detailPesanan">
          <Box className={styles.store}>
            <div className={styles.headStore}>
              <Button className={styles.storeInfo} variant="contained">
                Express
              </Button>
              <div className={styles.timesStore}>
                <div className={styles.timeStore}>11 Feb 2021</div>
                <div className={styles.timeStore}>14.31</div>
              </div>
            </div>
            <div className={styles.contentpart}>
              <div className={styles.ordered}>Total pesanan 12 produk</div>
              <div className={styles.price}>Rp. 23.000</div>
            </div>
            <div className={styles.location}>
              <div className={styles.market}>
                <Store className={styles.iconStore} />
                <div className={styles.address}>Tk. jaya abadi rahmat sukses</div>
              </div>
              <div className={styles.destination}>
                <LocationOn className={styles.iconLocationOn} />
                <div className={styles.address}>Jl.Soekarno gang II no 21, Pedurungan raya</div>
              </div>
            </div>
          </Box>
        </Link>
      </div>
    </div>
  );
};

export default Merchant;
