import React from "react";
import styled from "styled-components";
import TeamRegist from "../../components/template/TeamRegist";
import SubmitButton from "../../components/template/SubmitButton";

function TeamContainer() {
  return (
    <Wrapper>
      <Content>
        <TeamRegist />
      </Content>
      <SubmitButton />
    </Wrapper>
  );
}

export default TeamContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
`;
