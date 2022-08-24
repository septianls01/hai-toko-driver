import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const style = makeStyles(() => ({
  typo: {
    padding: '10px 0px',
    fontWeight: 'bold',
  },
  inputSelect: {
    height: 35,
    width: '100%',
  },
  input: {
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

const ItemsDomisili = () => {
  const classes = style();

  const [state, setState] = React.useState({
    provinsi: 'provinsi',
    kota: 'kota',
    kecamatan: 'kecamatan',
    kelurahan: 'kelurahan',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  return (
    <>
      {/* <Typography className={classes.typo}>Alamat Tinggal*</Typography>
      <div className={classes.inputName}>
        <input className={classes.input} placeholder="Alamat" type="text" />
      </div>
      <Typography className={classes.typo}>Provinsi Tinggal*</Typography>
      <div className={classes.inputName}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className={classes.inputLabel}
          >
            Kecamatan
          </InputLabel>
          <Select
            disableUnderline="true"
            className={classes.selectInput}
            labelId="provinsi"
            id="demo-simple-select"
            value={state.provinsi}
            name="provinsi"
            label="provinsi"
            onChange={handleChange}
          >
            <MenuItem value={10}>Jawa Tengah</MenuItem>
            <MenuItem value={20}>Jawa Timur</MenuItem>
            <MenuItem value={30}>Jawa Barat</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Typography className={classes.typo}>
        Kota / Kabupaten Tinggal*
      </Typography>
      <div className={classes.inputName}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className={classes.inputLabel}
          >
            Kota
          </InputLabel>
          <Select
            disableUnderline="true"
            className={classes.selectInput}
            labelId="kota"
            id="demo-simple-select"
            value={state.kota}
            name="kota"
            label="kota"
            onChange={handleChange}
          >
            <MenuItem value={10}>Semarang</MenuItem>
            <MenuItem value={20}>Surabaya</MenuItem>
            <MenuItem value={30}>Bandung</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <Typography className={classes.typo}>Kode Pos KTP</Typography>
      <div className={classes.inputName}>
        <input className={classes.input} placeholder="Kode Pos" type="number" />
      </div>
    </>
  );
};

export default ItemsDomisili;
