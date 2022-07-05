import React, { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Loading from "components/common/loading/Loading";

function Main() {
  return (
    <>
      <Content>
        <Header />
        <Suspense fallback={<Loading />}>
          <TabContents>
            <Outlet />
          </TabContents>
        </Suspense>
      </Content>
      <Footer />
    </>
  );
}

export default Main;

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 66fr);
  grid-template-rows: 5rem 4rem auto 2rem;
  grid-template-areas:
    "nav nav nav"
    "menu menu menu"
    "main main main"
    " . . . ";
  min-height: 100vh;
  margin: 0 auto;
`;

const TabContents = styled.div`
  grid-area: main;
  margin: 0 auto;
`;
