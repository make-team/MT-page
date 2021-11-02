import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div>menu</div>
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
