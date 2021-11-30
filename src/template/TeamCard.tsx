import React from "react";
import styled from "styled-components";
import { FIELD } from "constant/checkItems";

import Card from "template/layout/Card";

export interface Team {
  id: number;
  hackathonId: number;
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

export interface PropTypes {
  items?: Team[];
  add?: boolean;
  toUrl?: string;
}

function TeamCard({ items, add, toUrl }: PropTypes) {
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card
            key={item.id}
            height="15rem"
            width="80rem"
            toUrl={`${toUrl}/${item.id}`}
          >
            <Wrapper>
              <Contents>
                <div>
                  <div>- 팀 명 -</div>
                  <div>{item.name}</div>
                </div>
                <div>
                  <div>- 연락처 -</div>
                  <div>{item.contact}</div>
                </div>
                <div>
                  <div>- 모집 기간 -</div>
                  <div>
                    {`${item.startTime.getFullYear()}년` +
                      `${item.startTime.getMonth()}월` +
                      `${item.startTime.getDay()}일`}{" "}
                    ~{" "}
                    {`${item.endTime.getFullYear()}년` +
                      `${item.endTime.getMonth()}월` +
                      `${item.endTime.getDay()}일`}
                    {"(" +
                      parseInt(
                        `${
                          (item.endTime.getTime() - item.startTime.getTime()) /
                          (24 * 60 * 60 * 1000)
                        }`
                      ) +
                      "일간" +
                      ")"}
                  </div>
                </div>
              </Contents>
              <div>- 팀 설명 -</div>
              <TeamDescription>
                <div>{item.description}</div>
              </TeamDescription>
              <div>
                {item.recruiment && item.recruiment.length > 0 && (
                  <div> - 모집 공고 -</div>
                )}
                {item.recruiment && item.recruiment.length > 0 && (
                  <PersonList>
                    {item.recruiment.map((item, index) => {
                      return (
                        <div key={index}>
                          <div>모집 분야 : {FIELD[item.field]}</div>
                          <div>요구 기술 : {item.skill}</div>
                          <div>요구 인원 : {item.count}</div>
                        </div>
                      );
                    })}
                  </PersonList>
                )}
              </div>
            </Wrapper>
          </Card>
        ))}
    </List>
  );
}

export default TeamCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  background-color: #f7f1f0;
  flex-wrap: wrap;
  & > div {
    margin: 2rem;
  }
`;

const Wrapper = styled.div``;

const Contents = styled.div`
  display: flex;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
const TeamDescription = styled.div`
  border: 0.1rem solid #262220;
  padding: 1rem;
  height: 3rem;
  text-align: left;
  word-break: break-all;
  margin-bottom: 0.5rem;
`;

const PersonList = styled.div`
  display: flex;
  & > div {
    border: 0.25rem solid #262220;
    height: 4rem;
    width: 12rem;
    margin-right: 0.5rem;
    background-color: white;
  }
`;
