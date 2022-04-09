import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
import Biodata from './components/Biodata';
import ButtonSave from './components/ButtonSave';
import Domisili from './components/Domisili';
import Pendaftaran from './components/Pendaftaran';

const index = () => {
  return (
    <Layout>
      <Container>
        <Pendaftaran />
        <Biodata />
        <Domisili />
        <ButtonSave />
      </Container>
    </Layout>
  );
};

export default index;
