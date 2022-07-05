import React from "react";
import styled from "styled-components";

function PersonDetail() {
  return (
    <Wrapper>
      <Title>이름</Title>
      <Contents>
        <img src="" alt="본인 이미지" />
        <div>
          <div>사는 곳 :</div>
          <div></div>
          <div>사용 기술 :</div>
          <div></div>
          <div>자기 소개 :</div>
          <div></div>
          <div>연락처 :</div>
          <div></div>
        </div>
      </Contents>
    </Wrapper>
  );
}

export default PersonDetail;

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
