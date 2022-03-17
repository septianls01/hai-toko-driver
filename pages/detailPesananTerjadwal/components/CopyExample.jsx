import React, { useRef, useState } from 'react';
import { FileCopy } from '@material-ui/icons';
import styles from 'styles/detailPesananTerjadwal.module.css';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  }

  return (
    <div className={styles.infoNoChanges}>
      <input className={styles.Einput} ref={textAreaRef} value="081 323 441 012" />
      {
        /* Logical shortcut for only displaying the 
          button if the copy command exists */
        document.queryCommandSupported('copy') && (
          <div>
            <FileCopy className={styles.iconCopy} onClick={copyToClipboard} />
            {/* {copySuccess} */}
          </div>
        )
      }
    </div>
  );
}
