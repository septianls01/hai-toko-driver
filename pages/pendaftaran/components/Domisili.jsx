import Upload from '@components/Upload/Index';
import { FormControl, InputLabel, MenuItem, Select, Switch, Typography } from '@material-ui/core';
import { TwoWheeler, Notifications, CloudUpload } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
// import { TextField } from '@mui/material';
import React, { useState } from 'react';
import ItemsDomisili from './ItemsDomisili';

const style = makeStyles(() => ({
  motorcycle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    color: '#d3455b',
    borderBottom: '2px solid #dfe6ed',
  },
  switchContent: {
    fontSize: 14,
  },
  iconT: {
    width: 30,
    height: 30,
    fontSize: 20,
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 600,
  },
  typo: {
    padding: '10px 0px',
    fontWeight: 'bold',
  },
  input: {
    height: 35,
    width: '100%',
  },
  typo: {
    padding: '10px 0px',
    fontWeight: 'bold',
  },
  inputSelect: {
    height: 35,
    width: '100%',
  },
  inputLabel: {
    paddingLeft: 5,
    fontSize: 16,
  },
  selectInput: {
    paddingLeft: 5,
    border: '1px solid #767676',
  },
  textFormat: {
    color: 'gray',
  },
}));

const Domisili = () => {
  const [toogle, setToogle] = useState(false);

  const toogler = () => {
    toogle ? setToogle(false) : setToogle(true);
  };

  const classes = style();

  const [state, setState] = React.useState({
    info: '',
    counter: 0,
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
      <Typography className={classes.typo}>Kode Pos KTP</Typography>
      <div className={classes.inputName}>
        <input className={classes.input} placeholder="Kode Pos" type="number" />
      </div>
      <div className={classes.content}>
        <Typography className={classes.switchContent}>
          Alamat domisili sama dengan alamat KTP
          <Switch onClick={toogler} />
          {toogle ? (
            <span>
              <ItemsDomisili />
            </span>
          ) : null}
        </Typography>
      </div>
      <div className={classes.motorcycle}>
        <TwoWheeler className={classes.iconT} />
        <p className={classes.text}>Kendaraan</p>
      </div>
      <Typography className={classes.typo}>No Kendaraan*</Typography>
      <div className={classes.inputName}>
        <input className={classes.input} placeholder="No Kendaraan" type="text" />
      </div>
      <div className={classes.motorcycle}>
        <Notifications className={classes.iconT} />
        <p className={classes.text}>Tambahan</p>
      </div>
      <Typography className={classes.typo}>Informasi ini di dapat dari?</Typography>
      <div className={classes.inputName}>
        <FormControl fullWidth>
          <InputLabel className={classes.inputLabel} id="demo-simple-select-label">
            Info
          </InputLabel>
          <Select disableUnderline="true" className={classes.selectInput} labelId="info" id="demo-simple-select" value={state.info} name="info" label="info" onChange={handleChange}>
            <MenuItem value={1}>Facebook</MenuItem>
            <MenuItem value={2}>Instagram</MenuItem>
            <MenuItem value={3}>Twitter</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Domisili;
