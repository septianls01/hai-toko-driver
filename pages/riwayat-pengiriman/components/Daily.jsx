import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Daily() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker views={['year', 'month', 'day']} label="Tanggal Pesanan" maxDate={new Date('2022-07-10')} value={value} onChange={setValue} renderInput={(params) => <TextField {...params} helperText={null} />} />
      {/* <DatePicker
        label="Tanggal Pesanan"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder} />}
      /> */}
    </LocalizationProvider>
  );
}
