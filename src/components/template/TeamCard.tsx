import React from "react";
import styled from "styled-components";

import Card from "../common/Card";

export interface Hackathon {
  id: number;
  title: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
}

export interface PropTypes {
  items?: Hackathon[];
  add?: boolean;
  toUrl?: string;
}

function TeamCard({ items, add, toUrl }: PropTypes) {
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card
            height="20rem"
            width="35rem"
            toUrl={`${toUrl}/${item.id}`}
            key={item.id}
          >
            <CardContentWrapper>
              <Contents>
                <div>
                  <h3>참여 해커톤 : </h3>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <div>팀 설명 : </div>
                  <div>{item.description}</div>
                </div>
                <div>
                  <div>연락처 : </div>
                  <div>{item.contact}</div>
                </div>
                <div>
                  <div>기간 : </div>
                  <div>{item.startTime.getFullYear()}</div>
                  <div>~</div>
                  <div>{item.endTime.getFullYear()}</div>
                </div>
                <div>모집 팀원 : </div>
                <PersonList>
                  <div>
                    <div>프론트</div>
                    <div>2명</div>
                    <div>react</div>
                  </div>
                  <div>
                    <div>백</div>
                    <div>2명</div>
                    <div>pyhon</div>
                  </div>
                  <div>
                    <div>디자이너</div>
                    <div>2명</div>
                    <div>디자인툴</div>
                  </div>
                  <div>
                    <div>기획자</div>
                    <div>2명</div>
                    <div>기획기획</div>
                  </div>
                </PersonList>
              </Contents>
            </CardContentWrapper>
          </Card>
        ))}
      {add && (
        <Card toUrl={`${toUrl}/regist`}>
          <div> 등록하기 </div>
        </Card>
      )}
    </List>
  );
}

export default TeamCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  align-content: stretch;
  background-color: #2d3436;
  flex-wrap: wrap;
  & > div {
    margin: 1rem 1rem;
  }
`;

const CardContentWrapper = styled.div`
  display: flex;
  height: 100%;
  & > div {
    flex: 1;
  }
`;

const Contents = styled.div`
  background-color: black;
  padding: 1rem 0;
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
const PersonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    border: 1px solid greenyellow;
    height: 4rem;
    width: 7rem;
    margin-right: 0.5rem;
  }
`;
