import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Biodata from './components/Biodata';
import ButtonSave from './components/ButtonSave';
import Domisili from './components/Domisili';
import Pendaftaran from './components/Pendaftaran';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';
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

// export const getStaticProps = async () => {
//   const getProvinces = await fetch('http://127.0.0.1:8000/api/provinces');
//   const dataProvince = await getProvinces.json();

//   const getRegencies = await fetch('http://127.0.0.1:8000/api/regencies');
//   const dataRegencie = await getRegencies.json();

//   const getVillages = await fetch('http://127.0.0.1:8000/api/villages');
//   const dataVillage = await getVillages.json();

//   const getDistricts = await fetch('http://127.0.0.1:8000/api/districts');
//   const dataDistrict = await getDistricts.json();

//   return {
//     props: {
//       dataProvince,
//       dataRegencie,
//       dataVillage,
//       dataDistrict,
//     },
//   };
// };
// export const getStaticProps = async () => {
//   const res = await fetch('http://127.0.0.1:8000/api/villages');
//   const dataVillage = await res.json();

//   return {
//     props: {
//       dataVillage,
//     },
//   };
// };

const index = () => {
  const classes = style();
  const [province, setProvince] = useState([]);
  const [provinceid, setProvinceid] = useState('');
  const [regencie, setRegencie] = useState([]);

  useEffect(() => {
    const getProvince = async () => {
      const resprovince = await fetch(`http://127.0.0.1:8000/api/provinces/`);
      const getprov = await resprovince.json();
      console.log(getprov);
      setProvince(await getprov);
    };
    getProvince();
  }, []);

  const handleprovince = (event) => {
    const getprovinceid = event.target.value;
    console.log(getprovinceid);
    setProvinceid(getprovinceid);
  };

  useEffect(() => {
    const getRegencie = async () => {
      const resregencie = await fetch(`http://127.0.0.1:8000/api/regencies/${provinceid}`);
      const getreg = await resregencie.json();
      setRegencie(await getreg);
    };
    console.log(regencie);
    getRegencie();
  }, [provinceid]);

  // const [state, setState] = React.useState({
  //   // provinsi: '',
  //   // kota: '',
  //   // kecamatan: '',
  //   // kelurahan: '',
  // });

  // function handleChange(evt) {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value,
  //   });
  // }
  return (
    <Layout>
      <Container>
        <Pendaftaran />
        <h2>test province {provinceid}</h2>

        <Typography className={classes.typo}>Provinsi KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} onChange={(e) => handleprovince(e)}>
              {province.map((curElem, index) => (
                <option key={index} value={curElem.id}>
                  {curElem.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kota / Kabupaten KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput}>
              {regencie.map((curKota, index) => (
                <option key={index} value={curKota.province_id}>
                  {curKota.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* <Typography className={classes.typo}>Provinsi KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} onChange={(e) => handlecountry(e)}>
              {dataProvince.map((curElem, index) => {
                return (
                  <MenuItem key={index} value={curElem.id}>
                    {curElem.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div> */}

        {/* <Typography className={classes.typo}>Kota / Kabupaten KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput}>
              {dataRegencie.map((curKota) => {
                return <MenuItem value={curKota.province_id}> {curKota.name} </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kecamatan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput}>
              {dataVillage.map((curKec) => {
                return <MenuItem value={curKec.regency_id}> {curKec.name} </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kelurahan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput}>
              {dataDistrict.map((curKel) => {
                return <MenuItem value={curKel.district_id}> {curKel.name} </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div> */}

        {/* <Biodata /> */}
        {/* <Domisili />
        <ButtonSave /> */}
      </Container>
    </Layout>
  );
};

export default index;
// return (
//   <div key={curElem.id}>
//     <h3>{curElem.id}</h3>
//     <h2>{curElem.name}</h2>
//   </div>
// );
