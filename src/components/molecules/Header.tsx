import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <div>Make Team</div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: center;
  & > div {
    font-size: 5rem;
  }
`;
