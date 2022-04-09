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
  backgroundColor: '#1aae9f;',
  display: 'flex',
  justifyContent: 'center',
  margin: '30px 0 16px 0',
  color: '#fff',
  fontSize: '16px',
  width: '100%',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: '#1aae9f;',
  },
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
            Simpan
          </ColorButton>
        </Link>
      </div>
    </center>
  );
}
