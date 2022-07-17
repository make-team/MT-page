import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TeamRegistContainer from "container/team/RegistContainer";

function TeamRegist() {
  const location = useLocation();
  const history = useNavigate();

  const id = location.state as string;

  const goBackClick = () => {
    history(-1);
  };

  return (
    <Wrapper>
      <TeamRegistContainer id={id} onCancel={goBackClick} />
    </Wrapper>
  );
}

export default TeamRegist;

const Wrapper = styled.div``;
