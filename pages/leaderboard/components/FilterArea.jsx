import { Button } from '@material-ui/core';
import React from 'react';
import styles from 'styles/leaderboard.module.css';

const FilterArea = () => {
  var buttons = $('Button');
  buttons.click(function () {
    buttons.css('background-color', 'snow');
    $(this).css('background-color', 'pink');
  });
  return (
    <div>
      <div className={styles.button}>
        <Button size="small" variant="contained" href="#contained-buttons">
          Kota
        </Button>
        <Button size="small" variant="outlined" href="#outlined-buttons">
          Provinsi
        </Button>
        <Button size="small" variant="outlined" href="#outlined-buttons">
          Global
        </Button>
      </div>
    </div>
  );
};

// className={styles.buttonKota}
// className={styles.buttonProvinsi}
// className={styles.buttonGlobal}

export default FilterArea;
