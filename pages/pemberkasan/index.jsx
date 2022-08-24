import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Upload from '@components/Upload';
import { Container } from '@material-ui/core';
import Biodata from './components/Biodata';
import ButtonSave from './components/ButtonSave';
import Domisili from './components/Domisili';
import ItemsDomisili from './components/ItemsDomisili';
import Pendaftaran from './components/Pendaftaran';
import UploadButtons from './components/UploadButtons';
import UploadFile from './components/UploadFile';
import { FormControl, InputLabel, Select, Switch, MenuItem, Typography } from '@material-ui/core';
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

const index = () => {
  const classes = style();
  const [province, setProvince] = useState([]);
  const [provinceid, setProvinceid] = useState('');
  const [regencie, setRegencie] = useState([]);
  const [regencieid, setRegencieid] = useState('');
  const [district, setDistrict] = useState([]);
  const [districtid, setDistrictid] = useState('');
  const [village, setVillage] = useState([]);

  const [prov, setProv] = useState([]);
  const [provid, setProvid] = useState('');
  const [regen, setRegen] = useState([]);
  const [regenid, setRegenid] = useState('');
  const [dist, setDist] = useState([]);
  const [distid, setDistid] = useState('');
  const [villa, setVilla] = useState([]);

  const [toogle, setToogle] = useState(false);

  const toogler = () => {
    toogle ? setToogle(false) : setToogle(true);
  };
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

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
      console.log(regencie);
      setRegencie(await getreg);
    };
    getRegencie();
  }, [provinceid]);

  const handleregencie = (event) => {
    const getregencieid = event.target.value;
    console.log(getregencieid);
    setRegencieid(getregencieid);
  };

  useEffect(() => {
    const getDistrict = async () => {
      const resdistrict = await fetch(`http://127.0.0.1:8000/api/districts/${regencieid}`);
      const getdis = await resdistrict.json();
      console.log(district);
      setDistrict(await getdis);
    };
    getDistrict();
  }, [regencieid]);

  const handledistrict = (event) => {
    const getdistrictid = event.target.value;
    console.log(getdistrictid);
    setDistrictid(getdistrictid);
  };

  useEffect(() => {
    const getVillage = async () => {
      const resvillage = await fetch(`http://127.0.0.1:8000/api/villages/${districtid}`);
      const getvil = await resvillage.json();
      console.log(getvil);
      setVillage(await getvil);
    };
    getVillage();
  }, [districtid]);

  useEffect(() => {
    const getProvin = async () => {
      const resprovin = await fetch(`http://127.0.0.1:8000/api/provin/`);
      const getprovin = await resprovin.json();
      console.log(getprovin);
      setProv(await getprovin);
    };
    getProvin();
  }, []);

  const handleprovin = (event) => {
    const getprovinid = event.target.value;
    // console.log(getprovinceid);
    setProvid(getprovinid);
  };

  useEffect(() => {
    const getRegenc = async () => {
      const resregenc = await fetch(`http://127.0.0.1:8000/api/regencies/${provid}`);
      const getregen = await resregenc.json();
      console.log(regencie);
      setRegen(await getregen);
    };
    getRegenc();
  }, [provid]);

  const handleregenc = (event) => {
    const getregencieid = event.target.value;
    console.log(getregencieid);
    setRegenid(getregencieid);
  };

  useEffect(() => {
    const getDistr = async () => {
      const resdistr = await fetch(`http://127.0.0.1:8000/api/districts/${regenid}`);
      const getdis = await resdistr.json();
      console.log(getdis);
      setDist(await getdis);
    };
    getDistr();
  }, [regenid]);

  const handledist = (event) => {
    const getdistid = event.target.value;
    console.log(getdistid);
    setDistid(getdistid);
  };

  useEffect(() => {
    const getVilla = async () => {
      const resvilla = await fetch(`http://127.0.0.1:8000/api/villages/${distid}`);
      const getvil = await resvilla.json();
      console.log(getvil);
      setVilla(await getvil);
    };
    getVilla();
  }, [distid]);

  return (
    <Layout>
      <Container>
        <Pendaftaran />
        <Biodata />
        <Typography className={classes.typo}>Provinsi KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} onChange={(e) => handleprovince(e)}>
              {province.map((curElem, index) => (
                <MenuItem key={index} value={curElem.id}>
                  {curElem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kota KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} onChange={(r) => handleregencie(r)}>
              {regencie.map((curKota, index) => (
                <MenuItem key={index} value={curKota.id}>
                  {curKota.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kecamatan KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput} onChange={(d) => handledistrict(d)}>
              {district.map((curKecamatan, index) => (
                <MenuItem key={index} value={curKecamatan.id}>
                  {curKecamatan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Typography className={classes.typo}>Kabupaten KTP*</Typography>
        <div className={classes.inputName}>
          <FormControl fullWidth>
            <Select disableUnderline="true" className={classes.selectInput}>
              {village.map((curKabupaten, index) => (
                <MenuItem key={index} value={curKabupaten.id}>
                  {curKabupaten.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Typography className={classes.typo}>Kode Pos KTP</Typography>
        <div className={classes.inputName}>
          <input className={classes.input} placeholder="Kode Pos" type="number" />
        </div>

        <div className={classes.content}>
          <Typography className={classes.switchContent}>
            Alamat domisili tidak sesuai alamat KTP
            <Switch onClick={toogler} />
            {toogle ? (
              <span>
                <Typography className={classes.typo}>Alamat Tinggal*</Typography>
                <div className={classes.inputName}>
                  <input className={classes.input} placeholder="Alamat" type="text" />
                </div>

                <Typography className={classes.typo}>Provinsi Tinggal*</Typography>
                <div className={classes.inputName}>
                  <FormControl fullWidth>
                    <Select disableUnderline="true" className={classes.selectInput} onChange={(r) => handleprovin(r)}>
                      {prov.map((curProv, index) => (
                        <MenuItem key={index} value={curProv.id}>
                          {curProv.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <Typography className={classes.typo}>Kota Tinggal*</Typography>
                <div className={classes.inputName}>
                  <FormControl fullWidth>
                    <Select disableUnderline="true" className={classes.selectInput} onChange={(r) => handleregenc(r)}>
                      {regen.map((curRegen, index) => (
                        <MenuItem key={index} value={curRegen.id}>
                          {curRegen.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <Typography className={classes.typo}>Kecamatan Tinggal*</Typography>
                <div className={classes.inputName}>
                  <FormControl fullWidth>
                    <Select disableUnderline="true" className={classes.selectInput} onChange={(e) => handledist(e)}>
                      {dist.map((curKeca, index) => (
                        <MenuItem key={index} value={curKeca.id}>
                          {curKeca.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <Typography className={classes.typo}>Kabupaten Tinggal*</Typography>
                <div className={classes.inputName}>
                  <FormControl fullWidth>
                    <Select disableUnderline="true" className={classes.selectInput}>
                      {villa.map((curKabu, index) => (
                        <MenuItem key={index} value={curKabu.id}>
                          {curKabu.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <ItemsDomisili />
              </span>
            ) : null}
          </Typography>
        </div>
        <Domisili />
        <UploadFile />
        {/* <UploadButtons /> */}

        <ButtonSave />
      </Container>
    </Layout>
  );
};

export default index;
