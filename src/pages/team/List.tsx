import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import ListContainer from "container/team/ListContainer";

function TeamList() {
  const history = useNavigate();

  const onBack = () => {
    history("/team");
  };

  return (
    <Wrapper>
      <ListContainer onBack={onBack} />
    </Wrapper>
  );
}

export default TeamList;

const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;
