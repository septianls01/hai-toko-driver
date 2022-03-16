import { Button } from '@material-ui/core';
import React from 'react';
import styles from 'styles/leaderboard.module.css';

const FilterArea = () => {
  return (
    <div>
      <div className={styles.button}>
        <Button className={styles.buttonKota} size="small" variant="contained" href="#contained-buttons">
          Kota
        </Button>
        <Button className={styles.buttonProvinsi} size="small" variant="outlined" href="#outlined-buttons">
          Provinsi
        </Button>
        <Button className={styles.buttonGlobal} size="small" variant="outlined" href="#outlined-buttons">
          Global
        </Button>
      </div>
    </div>
  );
};

export default FilterArea;
