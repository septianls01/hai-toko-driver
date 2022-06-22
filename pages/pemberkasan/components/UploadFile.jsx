import { Button } from '@material-ui/core';
import React, { useState } from 'react';

function UploadFile() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div
      // style={{
      //   border: '1px solid gray',
      //   maxWidth: '55vw',
      //   padding: '5px 5px 5px 5px',
      //   backgroundColor: '#833ae3',
      //   borderRadius: '100px',
      // }}
      >
        {/* <label>Upload KTP</label> */}
        <div style={{}}>
          <input type="file" accept="image/*" />
        </div>
      </div>
    </>
  );
}

export default UploadFile;
