import React, { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Loading from "components/common/loading/Loading";

function Main() {
  return (
    <Wrapepr>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <TabContents>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </TabContents>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapepr>
  );
}

export default Main;

const Wrapepr = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, 90rem);
  grid-template-rows: 3rem 1fr 4rem;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  min-height: 100vh;
  color: ${(props) => props.theme.textColor};
`;

const TabContents = styled.div`
  grid-area: main;
  padding-top: 2rem;
  background-color: ${(props) => props.theme.mainBackground};
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
`;
