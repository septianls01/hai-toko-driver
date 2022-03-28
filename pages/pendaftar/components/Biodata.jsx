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
const Biodata = () => {
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
            <InputLabel className={classes.inputLabel} id="demo-simple-select-label">
              Jenis Kelamin
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="info" id="demo-simple-select" value={state.info} name="info" label="info" onChange={handleChange}>
              <MenuItem value={1}>P</MenuItem>
              <MenuItem value={2}>L</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Alamat KTP*</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Alamat" type="text" />
        </div>
        <Typography className={classes.typo}>Provinsi KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <InputLabel className={classes.inputLabel} id="demo-simple-select-label">
              Provinsi
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="provinsi" id="demo-simple-select" value={state.provinsi} name="provinsi" label="provinsi" onChange={handleChange}>
              <MenuItem value={1}>Jawa Timur</MenuItem>
              <MenuItem value={2}>Jawa Tengah</MenuItem>
              <MenuItem value={3}>Jawa Barat</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kota / Kabupaten KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>
              Kota
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="kota" id="demo-simple-select" value={state.kota} label="kota" name="kota" onChange={handleChange}>
              <MenuItem value={10}>Surabaya</MenuItem>
              <MenuItem value={20}>Semarang</MenuItem>
              <MenuItem value={30}>Bandung</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kecamatan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>
              Kecamatan
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="kecamatan" id="demo-simple-select" value={state.kecamatan} label="kecamatan" name="kecamatan" onChange={handleChange}>
              <MenuItem value={10}>SemarangUtara</MenuItem>
              <MenuItem value={20}>SemarangTimur</MenuItem>
              <MenuItem value={30}>SemarangBarat</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kelurahan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>
              Kelurahan
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="kelurahan" id="demo-simple-select" value={state.kelurahan} label="kelurahan" name="kelurahan" onChange={handleChange}>
              <MenuItem value={10}>Surabaya</MenuItem>
              <MenuItem value={20}>Semarang</MenuItem>
              <MenuItem value={30}>Bandung</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kode Pos KTP</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Kode Pos" type="number" />
        </div>
      </div>
    </form>
  );
};

export default Biodata;
