import React from "react";
import styled from "styled-components";

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import CardList from "../components/template/CardList";

function Main() {
  return (
    <Wrapper>
      <Header />
      <CardList></CardList>
      <Footer />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 25px 185px 30px auto 25px 25px;
  grid-template-areas:
    " . . ."
    "nav nav nav"
    " . . . "
    "sidebar-a main sidebar-b"
    " . . . "
    "footer footer footer";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;
