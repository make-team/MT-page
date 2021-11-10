import React from "react";
import styled from "styled-components";

function PersonDetail() {
  return (
    <Wrapper>
      <Title></Title>
      <Contents>
        <div>
          <h2>팀 소개</h2>
          <div>안녕하세요 어쩌고</div>
          <h2>모집 기간</h2>
          <div>언제부터 ~ 언제까지</div>
          <h2>활동 구역</h2>
          <div> 내 활동구역은 여기다 </div>
          <h2>모집 팀원</h2>
          <CardWrapper>
            <TeamCard>
              <div> 1 명 </div>
              <div>프론트</div>
            </TeamCard>
            <TeamCard>
              <div> 1 명 </div>
              <div>백</div>
            </TeamCard>
            <TeamCard>
              <div> 1 명 </div>
              <div>디자이너</div>
            </TeamCard>
            <TeamCard>
              <div> 1 명 </div>
              <div>기획자</div>
            </TeamCard>
          </CardWrapper>
          <h2>연락처 : 000 - 0000 - 0000 </h2>
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

const CardWrapper = styled.div`
  display: flex;
`;
const TeamCard = styled.div`
  display: flex;
  border: 1px solid white;
`;
