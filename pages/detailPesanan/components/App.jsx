import React, { useState } from 'react';
import styles from 'styles/modal.module.css';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.App}>
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className={styles.openModalBtn}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
