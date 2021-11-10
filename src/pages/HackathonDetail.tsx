import React from "react";
import styled from "styled-components";

function HackathonDetail() {
  return (
    <Wrapper>
      <Title>title</Title>
      <Contents>
        <img src="" alt="postImg" />
        <div>
          <div>해커톤 제목</div>
          <div>기간</div>
          <div>설명</div>
          <div>담당자 연락처</div>
        </div>
      </Contents>
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 3rem auto 25px;
  grid-template-areas:
    " . title ."
    " . content ."
    " . . . ";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;

const Contents = styled.div`
  grid-area: content;
  display: flex;
  padding: 1.5rem;
  & > img {
    height: 100%;
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

const Title = styled.div`
  display: flex;
  grid-area: title;
  align-items: center;
  justify-content: center;
`;
