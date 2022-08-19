import { FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const style = makeStyles(() => ({
  main: {
    padding: '10px 0px',
  },
  typo: {
    padding: '10px 0px',
    marginBottom: '2px',
    fontWeight: 'bold',
  },
  input: {
    height: 35,
    width: '100%',
  },
  inputSelect: {
    height: 35,
    width: '100%',
  },
  selectInput: {
    paddingLeft: 5,
    border: '1px solid #767676',
  },
  inputLabel: {
    paddingLeft: 5,
    fontSize: 16,
  },
}));

//axios
// export const getStaticProps = async () => {
//   const res = await fetch('http://127.0.0.1:8000/api/provinces');
//   const data = await res.json();

//   return {
//     props: { biodata: data },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/provinces');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Biodata = ({ data }) => {
  const classes = style();

  const [state, setState] = React.useState({
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  return (
    <form className={classes.form}>
      <div className={classes.main}>
        <Typography className={classes.typo}>Nama Lengkap (sesuai KTP)*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Nama Lengkap" type="text" />
        </div>
        <Typography className={classes.typo}>No KTP/NIK *</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="No KTP/NIK" type="number" name="NIK" />
        </div>
        <Typography className={classes.typo}>Email*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Email" type="email" />
        </div>
        <Typography className={classes.typo}>Tanggal Lahir*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Tanggal Lahir" type="date" />
        </div>
        <Typography className={classes.typo}>No Telp / WA*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="No Telp" type="number" />
        </div>
        <Typography className={classes.typo}>Jenis Kelamin*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select style={{ display: 'block' }} disableUnderline="true" className={classes.selectInput} value={state.info} onChange={handleChange}>
              <MenuItem value={1}>P</MenuItem>
              <MenuItem value={2}>L</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Alamat KTP*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Alamat" type="text" />
        </div>
      </div>
    </form>
  );
};

export default Biodata;
