import React from 'react';
import Back from './components/Back';
import { Container } from '@material-ui/core';
import Layout from '@components/layout';
import ButtonDay from './components/ButtonDay';
// import Monthly from './components/Monthly';
import Status from './components/Status';
import Merchant from './components/Merchant';
import Search from './components/Search';
import Date from './components/Date';

function index() {
  // const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <Layout>
        <Container>
          <Back />
          <ButtonDay />
          <Date />
          {/* {isActive ? <Status /> : <Date/>} */}
          <Status />
          <Search />
          <Merchant />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
