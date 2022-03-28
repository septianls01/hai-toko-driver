import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  circle: {
    height: 100,
  },
  spirit: {
    color: "gray",
  },
  content: {
    width: "50%",
  },
}));

const DashboardContent = () => {
  const styles = useStyle();
  return (
    <>
      <center>
        <div className={styles.circle}></div>
        <img
          className={styles.images}
          src="/assets/HaiTokoDriver.png"
          alt="Foto"
        />
        <div className={styles.content}>
          <h2>Belum Ada Order</h2>
          <span className={styles.spirit}>
            Tetap semangat, tunggu ada pesanan untuk hari ini
          </span>
        </div>
      </center>
    </>
  );
};

export default DashboardContent;
