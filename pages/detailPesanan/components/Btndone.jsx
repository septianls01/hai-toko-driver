import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';

// const style = makeStyles(() => ({
//   textFormat: {
//     color: 'gray',
//   },
// }));
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#1aae9f;'),
  backgroundColor: '#d3455b;',
  display: 'flex',
  justifyContent: 'center',
  margin: '30px 0 16px 0',
  color: '#fff',
  fontSize: '16px',
  width: '100%',
  padding: '8px 0',
}));

// const ButtonSave = () => {
// //   const classes = style();

//   return (
//     <>
//         <Stack spacing={2} direction="row">
//       <ColorButton variant="contained">Simpan</ColorButton>
//     </Stack>
//     </>
//   );
// };

// export default ButtonSave;

export default function ButtonSave() {
  return (
    <center>
      <div className="contentButton">
        <Link style={{ textDecoration: 'none' }}>
          <ColorButton style={{ textAlign: 'center' }} variant="contained">
            Pengiriman Selesai
          </ColorButton>
        </Link>
      </div>
    </center>
  );
}
