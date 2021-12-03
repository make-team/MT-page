import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

import HackathonTeamCardContents from "components/organisms/HackathonTeamCardContents";

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
}

function HackathonCard({ items, add }: PropTypes) {
  return (
    <>
      <Title>팀원 모집</Title>
      <List>
        {items &&
          items.map((item) => (
            <HackathonTeamCardContents
              key={item.id}
              toUrl={`/team/${item.id}`}
              name={item.name}
              description={item.description}
              recruiment={item.recruiment}
              contact={item.contact}
              startTime={item.startTime}
              endTime={item.endTime}
              add={add}
            />
          ))}
      </List>
    </>
  );
}

export default HackathonCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  flex-wrap: wrap;
  background-color: #f7f1f0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
