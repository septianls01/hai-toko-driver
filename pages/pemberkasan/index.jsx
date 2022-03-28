import Layout from '@components/Layout';
import Upload from '@components/Upload';
import { Container } from '@material-ui/core';
import React from 'react';
import Biodata from './components/Biodata';
import ButtonSave from './components/ButtonSave';
import Domisili from './components/Domisili';

import Pendaftaran from './components/Pendaftaran';
import UploadFile from './components/UploadFile';

const index = () => {
  return (
    <Layout>
      <Container>
        <Pendaftaran />
        <Biodata />
        <Domisili />
        <UploadFile />
        <ButtonSave />
      </Container>
    </Layout>
  );
};

export default index;
