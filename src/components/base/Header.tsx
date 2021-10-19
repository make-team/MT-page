import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo>Hong Jung Wan</Logo>
      <Title>Hong Jung Wan</Title>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: relative;
  height: 3rem;
`;

const Logo = styled.div`
  position: absolute;
  width: 12rem;
  height: 2rem;
  left: 3rem;
  top: 0.5rem;
  background-color: steelblue;
  font-weight: 700;
`;

const Title = styled.span`
  position: absolute;
  font-size: 2rem;
`;
