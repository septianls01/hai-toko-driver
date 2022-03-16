import Box from '@mui/material/Box';
import { Sort } from '@material-ui/icons';
import React from 'react';
import styles from 'styles/leaderboard.module.css';

// const sortRank = [
//     {No: 1, Name:'Ahmad jalil', point:'15.700 poin'},
//     {No: 2, Name:'Hilman paris', point:'12.700 poin'},
//     {No: 3, Name:'Hilman paris', point:'10.400 poin'},
// ]

const RankDriver = () => {
  return (
    <div>
      <div className={styles.headcontentRank}>
        <div className={styles.headingRank}>100 Rangking teratas</div>
        <Sort className={styles.iconSort} />
      </div>
      <div className={styles.nameDriverRank}>
        <Box className={styles.driverRank}>
          <div className={styles.contentRank}>
            <div className={styles.leftRank}>
              <div className={styles.numberDriver}>1</div>
              <div className={styles.nameDriver}>Ahmad jalil</div>
            </div>
            <div className={styles.pointDriver}>15.700 poin</div>
          </div>
        </Box>
        <Box className={styles.driverRank}>
          <div className={styles.contentRank}>
            <div className={styles.leftRank}>
              <div className={styles.numberDriver}>2</div>
              <div className={styles.nameDriver}>Hilman paris</div>
            </div>
            <div className={styles.pointDriver}>12.700 poin</div>
          </div>
        </Box>
        <Box className={styles.driverRank}>
          <div className={styles.contentRank}>
            <div className={styles.leftRank}>
              <div className={styles.numberDriver}>3</div>
              <div className={styles.nameDriver}>Solehudin M.</div>
            </div>
            <div className={styles.pointDriver}>10.400 poin</div>
          </div>
        </Box>
        <Box className={styles.driverRank}>
          <div className={styles.contentRank}>
            <div className={styles.leftRank}>
              <div className={styles.numberDriver}>4</div>
              <div className={styles.nameDriver}>Burhanudin setioni</div>
            </div>
            <div className={styles.pointDriver}>9.300 poin</div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default RankDriver;
