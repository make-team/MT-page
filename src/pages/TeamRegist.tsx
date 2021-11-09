import React from "react";
import styled from "styled-components";
import TeamRegistContainer from "../container/regist/TeamContainer";

function TeamRegist() {
  return (
    <Wrapper>
      <TeamRegistContainer />
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
