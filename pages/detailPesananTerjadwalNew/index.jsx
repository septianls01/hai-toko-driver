import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '@components/layout';
import Back from './components/Back';
import NoPesanan from './components/noPesanan';
import BtnInfoSend from './components/BtnInfoSend';
import Place from './components/Place';
import Order from './components/Order';
import Btndone from './components/Btndone';

// import Search from './components/Search';

function index() {
  // const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <Layout>
        <Container>
          <Back />
        </Container>
        <NoPesanan />
        <Container>
          <BtnInfoSend />
          <Place />
          <Order />
          <Btndone />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
