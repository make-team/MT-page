import React from "react";
import styled from "styled-components";
import PersonContainer from "components/container/regist/PersonContainer";

function HackathonRegist() {
  return (
    <Wrapper>
      <PersonContainer />
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
