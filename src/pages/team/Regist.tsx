import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TeamRegistContainer from "container/team/RegistContainer";

function TeamRegist() {
  const location = useLocation();
  const history = useNavigate();
  let id = location.pathname.split("/");

  const goBackClick = () => {
    history(-1);
  };

  return (
    <Wrapper>
      <TeamRegistContainer id={id[2]} onCancel={goBackClick} />
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
