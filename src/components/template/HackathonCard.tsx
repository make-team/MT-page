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

function HackathonCard({ items, add, toUrl }: PropTypes) {
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
              <ImgWrapper>
                <img src="" alt="post" />
              </ImgWrapper>
              <Contents>
                <div>
                  <h3>제목 : </h3>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <div>설명 : </div>
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

export default HackathonCard;

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

const ImgWrapper = styled.div`
  margin-right: 1rem;
  background-color: whitesmoke;
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
