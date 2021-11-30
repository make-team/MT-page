import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  toUrl?: string;
}

function HackathonCard({ items, add, toUrl }: PropTypes) {
  const history = useNavigate();
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card key={item.id} onClick={() => history(`${toUrl}/${item.id}`)}>
            <HackathonTeamCardContents
              name={item.name}
              description={item.description}
              contact={item.contact}
              startTime={item.startTime}
              endTime={item.endTime}
              add={add}
              toUrl={toUrl}
            />
          </Card>
        ))}
    </List>
  );
}

export default HackathonCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  align-content: stretch;
  flex-wrap: wrap;
  background-color: #f7f1f0;
  & > div {
    margin: 1rem 1rem;
  }
`;

const Card = styled.div`
  cursor: pointer;
  height: 40rem;
  width: 25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #c3a6a0;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
