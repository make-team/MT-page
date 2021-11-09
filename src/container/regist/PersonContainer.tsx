import React from "react";
import styled from "styled-components";
import PersonRegist from "../../components/template/PersonRegist";
import SubmitButton from "../../components/template/SubmitButton";

function PersonContainer() {
  return (
    <Wrapper>
      <Content>
        <PersonRegist />
      </Content>
      <SubmitButton />
    </Wrapper>
  );
}

export default PersonContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
`;
