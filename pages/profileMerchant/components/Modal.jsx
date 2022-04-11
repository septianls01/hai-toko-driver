import React from 'react';
import styles from 'styles/modal.module.css';

function Modal({ setOpenModal }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <p>Pengiriman Selesai?</p>
        </div>
        <div className={styles.body}>
          <p className={styles.textModal}>Beritahu merchant bahwa pesanan P000001 telah selesai dikirim</p>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Batal
          </button>
          {/* <Link to="https://api.whatsapp.com/send?phone=6282134971530"> */}
          <button>Kirim Pesan</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
