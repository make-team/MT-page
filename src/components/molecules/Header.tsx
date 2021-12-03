import React from "react";
import styled from "styled-components";
import { Div } from "../atoms/Div";

function Header() {
  return (
    <Wrapper>
      <Div height="12rem">Make Team</Div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  grid-area: nav;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  & > div {
    font-size: 8rem;
  }
`;
