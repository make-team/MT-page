import React from "react";
import styled from "styled-components";
import HacktonContainer from "../container/regist/HacktonContainer";

function HackathonRegist() {
  return (
    <Wrapper>
      <HacktonContainer />
    </Wrapper>
  );
}

export default HackathonRegist;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 10rem auto 10rem;
  grid-template-areas:
    " . . . "
    ". main ."
    " . . . ";
`;
