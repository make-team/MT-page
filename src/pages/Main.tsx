import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Menu from "../components/base/Menu";
import CardListHackatonContainer from "../container/list/HackathonContainer";
import CardListPersonContainer from "../container/list/PersonContainer";
import CardListTeamContainer from "../container/list/TeamContainer";

function Main() {
  const [Tab, setTab] = useState(0);
  const changeTab = useCallback((id) => {
    setTab(id);
  }, []);

  return (
    <>
      <Content>
        <Header />
        <Menu activeTab={Tab} onClick={changeTab} />
        {Tab === 0 && <CardListHackatonContainer toUrl="/hackathon" />}
        {Tab === 1 && <CardListTeamContainer toUrl="/team" />}
        {Tab === 2 && <CardListPersonContainer toUrl="/person" />}
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
