import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Montly() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker views={['year', 'month']} label="Bulan pesanan" minDate={new Date('2012-03-01')} maxDate={new Date('2023-06-01')} value={value} onChange={setValue} renderInput={(params) => <TextField {...params} helperText={null} />} />
    </LocalizationProvider>
  );
}
