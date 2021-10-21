import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Title>Hong Jung Wan</Title>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  grid-area: nav;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 8rem;
  width: 100%;
`;
