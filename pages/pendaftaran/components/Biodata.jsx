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
            <InputLabel className={classes.inputLabel} id="demo-simple-select-label">
              Jenis Kelamin
            </InputLabel>
            <Select style={{ display: 'block' }} disableUnderline="true" className={classes.selectInput} labelId="info" id="demo-simple-select" value={state.info} name="info" onChange={handleChange}>
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
            {data.map((curElem) => {
              return (
                <div key={curElem.id}>
                  <h3>{curElem.id}</h3>
                  <h2>{curElem.name}</h2>
                </div>
              );
            })}
            {/* {biodata.map((bio) => (
              <Select key={bio.id} disableUnderline="true" className={classes.selectInput} labelId="provinsi" id="demo-simple-select" value={state.provinsi} name="provinsi" label="provinsi" onChange={handleChange}>
                <MenuItem> {bio.name} </MenuItem>
              </Select>
            ))} */}
            {/* <Select disableUnderline="true" className={classes.selectInput} labelId="provinsi" id="demo-simple-select" value={state.provinsi} name="provinsi" label="provinsi" onChange={handleChange}>
              <MenuItem value={10}>Nanggroe Aceh Darussalam</MenuItem>
              <MenuItem value={20}>Sumatera Barat</MenuItem>
              <MenuItem value={30}>Sumatera Utara</MenuItem>
              <MenuItem value={40}>Sumatera Selatan</MenuItem>
              <MenuItem value={50}>Lampung</MenuItem>
              <MenuItem value={60}>Riau</MenuItem>
              <MenuItem value={70}>Kepulauan Riau</MenuItem>
              <MenuItem value={80}>Jambi</MenuItem>
              <MenuItem value={90}>Kepulauan Bangka Belitung</MenuItem>
              <MenuItem value={100}>Bengkulu</MenuItem>
              <MenuItem value={110}>DKI Jakarta</MenuItem>
              <MenuItem value={120}>Banten</MenuItem>
              <MenuItem value={130}>Jawa Barat</MenuItem>
              <MenuItem value={140}>Jawa Tengah</MenuItem>
              <MenuItem value={150}>Jawa Timur</MenuItem>
              <MenuItem value={160}>DIY Yogyakarta</MenuItem>
              <MenuItem value={170}>Bali</MenuItem>
              <MenuItem value={180}>Nusa Tenggara Barat</MenuItem>
              <MenuItem value={190}>Nusa Tenggara Timur </MenuItem>
              <MenuItem value={200}>Kalimantan Barat</MenuItem>
              <MenuItem value={210}>Kalimantan Selatan</MenuItem>
              <MenuItem value={220}>Kalimantan Tengah</MenuItem>
              <MenuItem value={230}>Kalimantan Timur</MenuItem>
              <MenuItem value={240}>Kalimantan Utara</MenuItem>
              <MenuItem value={250}>Sulawesi Barat</MenuItem>
              <MenuItem value={260}>Sulawesi Tenggara</MenuItem>
              <MenuItem value={270}>Sulawesi Selatan</MenuItem>
              <MenuItem value={280}>Sulawesi Tengah</MenuItem>
              <MenuItem value={290}>Sulawesi Utara</MenuItem>
              <MenuItem value={300}>Gorontalo</MenuItem>
              <MenuItem value={310}>Maluku</MenuItem>
              <MenuItem value={320}>Maluku Utara</MenuItem>
              <MenuItem value={330}>Papua</MenuItem>
              <MenuItem value={340}>Papua Barat</MenuItem>
            </Select> */}
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kota / Kabupaten KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>
              Kota
            </InputLabel>
            <Select disableUnderline="true" className={classes.selectInput} labelId="kota" id="demo-simple-select" value={state.kota} label="kota" name="kota" onChange={handleChange}>
              <MenuItem value={10}>Kabupaten Banjarnegara</MenuItem>
              <MenuItem value={20}>Kabupaten Banyumas</MenuItem>
              <MenuItem value={30}>Kabupaten Batang</MenuItem>
              <MenuItem value={40}>Kabupaten Blora</MenuItem>
              <MenuItem value={50}>Kabupaten Boyolali</MenuItem>
              <MenuItem value={60}>Kabupaten Brebes</MenuItem>
              <MenuItem value={70}>Kabupaten Cilacap</MenuItem>
              <MenuItem value={80}>Kabupaten Demak</MenuItem>
              <MenuItem value={90}>Kabupaten Grobogan</MenuItem>
              <MenuItem value={100}>Kabupaten Jepara</MenuItem>
              <MenuItem value={110}>Kabupaten Karanganyar</MenuItem>
              <MenuItem value={120}>Kabupaten Kebumen</MenuItem>
              <MenuItem value={130}>Kabupaten Kendal</MenuItem>
              <MenuItem value={140}>Kabupaten Klaten</MenuItem>
              <MenuItem value={150}>Kabupaten Kudus</MenuItem>
              <MenuItem value={160}>Kabupaten Magelang</MenuItem>
              <MenuItem value={170}>Kabupaten Pati</MenuItem>
              <MenuItem value={180}>Kabupaten Pekalongan</MenuItem>
              <MenuItem value={190}>Kabupaten Pemalang</MenuItem>
              <MenuItem value={200}>Kabupaten Purbalingga</MenuItem>
              <MenuItem value={210}>Kabupaten Purworejo</MenuItem>
              <MenuItem value={220}>Kabupaten Rembang</MenuItem>
              <MenuItem value={230}>Kabupaten Semarang</MenuItem>
              <MenuItem value={240}>Kabupaten Sragen</MenuItem>
              <MenuItem value={250}>Kabupaten Sukoharjo</MenuItem>
              <MenuItem value={260}>Kabupaten Tegal</MenuItem>
              <MenuItem value={270}>Kabupaten Temanggung</MenuItem>
              <MenuItem value={280}>Kabupaten Wonogiri</MenuItem>
              <MenuItem value={290}>Kabupaten Wonosobo</MenuItem>
              <MenuItem value={300}>Kota Magelang</MenuItem>
              <MenuItem value={310}>Kota Pekalongan</MenuItem>
              <MenuItem value={320}>Kota Salatiga</MenuItem>
              <MenuItem value={330}>Kota Semarang</MenuItem>
              <MenuItem value={340}>Kota Surakarta</MenuItem>
              <MenuItem value={340}>Kota Tegal</MenuItem>
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
              <MenuItem value={10}>Banyumanik</MenuItem>
              <MenuItem value={20}>Candisari</MenuItem>
              <MenuItem value={30}>Gajahmungkur</MenuItem>
              <MenuItem value={40}>Gayamsari</MenuItem>
              <MenuItem value={50}>Genuk</MenuItem>
              <MenuItem value={60}>Gunungpati</MenuItem>
              <MenuItem value={70}>Mijen</MenuItem>
              <MenuItem value={80}>Ngaliyan</MenuItem>
              <MenuItem value={90}>Pedurungan</MenuItem>
              <MenuItem value={100}>Semarang Barat</MenuItem>
              <MenuItem value={110}>Semarang Selatan</MenuItem>
              <MenuItem value={120}>Semarang Tengah</MenuItem>
              <MenuItem value={130}>Semarang Timur</MenuItem>
              <MenuItem value={140}>Semarang Utara</MenuItem>
              <MenuItem value={140}>Tembalang</MenuItem>
              <MenuItem value={150}>Tugu</MenuItem>
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
              <MenuItem value={10}>Bulusan</MenuItem>
              <MenuItem value={20}>Jangli</MenuItem>
              <MenuItem value={30}>Kedungmundu</MenuItem>
              <MenuItem value={40}>Kramas</MenuItem>
              <MenuItem value={50}>Mangunharjo</MenuItem>
              <MenuItem value={60}>Meteseh</MenuItem>
              <MenuItem value={70}>Rowosari</MenuItem>
              <MenuItem value={80}>Sambiroto</MenuItem>
              <MenuItem value={90}>Sendangguwo</MenuItem>
              <MenuItem value={100}>Sendangmulyo</MenuItem>
              <MenuItem value={110}>Tandang</MenuItem>
              <MenuItem value={120}>Tembalang</MenuItem>
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
