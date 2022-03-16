import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '@components/layout';
import Back from './components/Back';
import FilterArea from './components/FilterArea';
import DropdownArea from './components/DropdownArea';
import RankDriver from './components/RankDriver';

function index() {
  // const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <Layout>
        <Container>
          <Back />
          <FilterArea />
          <DropdownArea />
          <RankDriver />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
