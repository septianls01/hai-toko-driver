import { SearchOutlined } from '@material-ui/icons';
import { FilterAlt } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/DashboardItem.module.css';

const DashboardItem = () => {
  return (
    <>
      <div className={styles.main}>
        <p className={styles.text}>Order Hari Ini (3)</p>
        {/* <div className={styles.icons}>
          <Link href="/">
            <SearchOutlined className={styles.icon} />
          </Link>
          <Link href="/dashboardfilter">
            <FilterAlt fontSize="30px" className={styles.icon} />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default DashboardItem;
