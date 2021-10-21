import React from "react";
import styled from "styled-components";

function HackathonRegist() {
  return (
    <Wrapper>
      <RegistForm>
        <div>title</div>
        <input></input>
        <div>img</div>
        <input></input>
        <div>모집인원</div>
        <input></input>
        <div>설명</div>
        <input></input>
      </RegistForm>
    </Wrapper>
  );
}

export default HackathonRegist;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 25px 185px 30px auto 25px 25px;
  grid-template-areas:
    " . . ."
    "nav nav nav"
    " . . . "
    "sidebar-a main sidebar-b"
    " . . . "
    "footer footer footer";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;

const RegistForm = styled.div`
  grid-area: main;
`;
