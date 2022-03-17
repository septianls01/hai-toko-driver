import Layout from "@components/Layout";
import { Container } from "@material-ui/core";
import React from "react";
import Back from "./components/Back";
import Merchant from "./components/Merchant";

function index() {
  return (
    <div>
      <Layout>
        <Container>
          <Back />
          <Merchant />
        </Container>
      </Layout>
    </div>
  );
}

export default index;
