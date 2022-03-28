import Header from '@components/Header';
import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
import Verified from './components/Verified';

const index = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <Verified />
      </Container>
    </Layout>
  );
};

export default index;
