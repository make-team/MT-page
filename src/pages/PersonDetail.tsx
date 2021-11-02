import React from "react";
import styled from "styled-components";

function PersonDetail() {
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

export default PersonDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: minmax(0, 66fr);
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 90rem;
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
