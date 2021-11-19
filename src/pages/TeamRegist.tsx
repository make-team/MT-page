import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import TeamRegistContainer from "../container/regist/TeamContainer";

function TeamRegist() {
  const history = useHistory();
  const goBackClick = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <TeamRegistContainer onCancel={goBackClick} />
    </Wrapper>
  );
}

export default TeamRegist;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 10rem auto 10rem;
  grid-template-areas:
    " . . . "
    ". main ."
    " . . . ";
`;
