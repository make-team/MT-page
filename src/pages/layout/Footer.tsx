import React from "react";
import styled from "styled-components";

import { Div } from "../../components/common/Div";

function Footer() {
  return (
    <Wrapper>
      <Div>menu</Div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: black;
`;
