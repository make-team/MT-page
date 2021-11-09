import React from "react";
import styled from "styled-components";

function HackathonRegist() {
  return (
    <Wrapper>
      <RegistForm>
        <div>이름</div>
        <input></input>
        <div>사용 기술 스택</div>
        <input></input>
        <div>자기소개( 200 자이내)</div>
        <input></input>
        <div>연락처(필수입력)</div>
        <input></input>
      </RegistForm>
      <button>등록하기</button>
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
