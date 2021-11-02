import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Title>Make Team</Title>
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
`;

const Title = styled.span`
  font-size: 8rem;
  width: 100%;
`;
