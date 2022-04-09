import React from 'react';
import Back from './components/Back';
import { Container } from '@material-ui/core';
import Layout from '@components/layout';
import NoPesanan from './components/noPesanan';
import Place from './components/Place';
import Order from './components/Order';
import AlertDialogSlide from './components/AlertDialogSlide';

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
          <Place />
          <Order />
          <AlertDialogSlide />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
