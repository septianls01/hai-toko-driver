import { Button } from '@material-ui/core';
import React, { useState } from 'react';

function UploadFile() {
  // const [value, setValue] = useState(0);

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
        <label htmlFor="contained-button-file-ktp">
          <input style={{ marginLeft: '8px', fontSize: '16px' }} name="upload" accept="image/*" id="contained-button-file-ktp" multiple type="file" />
          <Button style={{ backgroundColor: '#6558f5', color: '#fff', marginTop: '-48px' }} variant="contained" component="span">
            Upload KTP
          </Button>
        </label>
        <label htmlFor="contained-button-file-sim">
          <input style={{ marginLeft: '7px', fontSize: '16px' }} name="upload" accept="image/*" id="contained-button-file-sim" multiple type="file" />
          <Button style={{ backgroundColor: '#6558f5', color: '#fff', marginTop: '-48px' }} variant="contained" component="span">
            Upload SIM
          </Button>
        </label>
        <label htmlFor="contained-button-file-stnk">
          <input style={{ marginLeft: '18px', fontSize: '16px' }} name="upload" accept="image/*" id="contained-button-file-stnk" multiple type="file" />
          <Button style={{ backgroundColor: '#6558f5', color: '#fff', marginTop: '-48px' }} variant="contained" component="span">
            Upload STNK
          </Button>
        </label>
        <label htmlFor="contained-button-file-photo">
          <input style={{ marginLeft: '18px', fontSize: '16px' }} name="upload" accept="image/*" id="contained-button-file-photo" multiple type="file" />
          <Button style={{ backgroundColor: '#6558f5', color: '#fff', marginTop: '-48px' }} variant="contained" component="span">
            Upload Foto
          </Button>
        </label>
        {/* <label>Upload KTP</label> */}
        <div style={{}}>
          {/* <input type="file" id="selectedFile" style="display: none;" />
          <input type="button" value="Browse..." onclick="document.getElementById('selectedFile').click();" /> */}
        </div>
      </div>
    </>
  );
}

export default UploadFile;
