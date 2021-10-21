import React from "react";
import styled from "styled-components";

function HackathonRegist() {
  return (
    <Wrapper>
      <Title>title</Title>
      <Img>img</Img>
      <Contents>
        <div>모집인원</div>
        <div>설명</div>
      </Contents>
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
    "title title title"
    " . . . "
    "img img img"
    " . . . "
    "footer footer footer";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;

const Contents = styled.div`
  grid-area: main;
`;

const Title = styled.div`
  grid-area: title;
`;

const Img = styled.div`
  grid-area: img;
`;
