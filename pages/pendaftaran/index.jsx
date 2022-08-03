import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
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

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:8000/api');
  const data = await res.json();

  const getVillages = await fetch('http://127.0.0.1:8000/api/villages');
  const dataVillage = await getVillages.json();

  return {
    props: {
      data,
      dataVillage,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch('http://127.0.0.1:8000/api/villages');
//   const dataVillage = await res.json();

//   return {
//     props: {
//       dataVillage,
//     },
//   };
// };

const index = ({ data, dataVillage }) => {
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
    <Layout>
      <Container>
        <Pendaftaran />
        <Typography className={classes.typo}>Provinsi KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} name="provinsi" label="provinsi" onChange={handleChange}>
              {data.map((curElem) => {
                return <MenuItem value={curElem.id}> {curElem.name} </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kecamatan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} name="kecamatan" label="kecamatan" onChange={handleChange}>
              {dataVillage.map((curKec) => {
                return <MenuItem value={curKec.district_id}> {curKec.name} </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

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
