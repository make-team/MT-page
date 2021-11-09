import React from "react";
import styled from "styled-components";
import HacktonRegist from "../../components/template/HacktonRegist";
import SubmitButton from "../../components/template/SubmitButton";

function HacktonContainer() {
  return (
    <Wrapper>
      <Content>
        <HacktonRegist />
      </Content>
      <SubmitButton />
    </Wrapper>
  );
}

export default HacktonContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
`;
