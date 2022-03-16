import Layout from '@components/Layout';
import { Container } from '@material-ui/core';
import React from 'react';
import Account from './components/Account';
import Back from './components/Back';
import ButtonProfile from './components/ButtonProfile';

import DataDriver from './components/DataDriver';
import DriverProfile from './components/DriverProfile';
import Remember from './components/Remember';

import Vehicle from './components/vehicle';

function index() {
  return (
    <div>
      <Layout>
        <Container>
          <Back />
          <Account />
          <DataDriver />
          <Vehicle />
          <DriverProfile />
          <Remember />
          <ButtonProfile />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
