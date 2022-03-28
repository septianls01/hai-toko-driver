import Header from '@components/Header';
import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
import DashboardContent from './components/DashboardContent';
import DashboardItem from './components/DashboardItem';
import Search from './components/Search';

const index = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <DashboardItem />
        <Search />
        <DashboardContent />
      </Container>
    </Layout>
  );
};

export default index;
