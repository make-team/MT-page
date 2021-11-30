import React from "react";
import styled from "styled-components";
import PersonRegist from "template/PersonRegist";
import SubmitButton from "components/molecules/SubmitButton";

function PersonContainer() {
  return (
    <Wrapper>
      <Content>
        <PersonRegist />
      </Content>
      <SubmitButton onCancel={() => {}} onSubmit={() => {}} />
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
