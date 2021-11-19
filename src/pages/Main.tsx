import React from "react";
import styled from "styled-components";

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Menu from "../components/base/Menu";

function Main() {
  return (
    <>
      <Content>
        <Header />
        <Menu />
      </Content>
      <Footer />
    </>
  );
}

export default Main;

const Content = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: minmax(0, 66fr);
  grid-template-rows: 11rem 4rem auto 2rem;
  grid-template-areas:
    "nav nav nav"
    "menu menu menu"
    "main main main"
    " . . . ";
  max-width: 90rem;
  min-height: 100vh;
  margin: 0 auto;
`;
