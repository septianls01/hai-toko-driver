import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
import ContentPending from './components/ContentPending';
import Head from './components/head';

const index = () => {
  return (
    <Layout>
      <Container>
        <Head />
        <ContentPending />
      </Container>
    </Layout>
  );
};

export default index;
