import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

import TeamCardContents from "components/hackthon/DetailTeamCardContents";
import TeamRecruimentCardList from "components/team/RecruimentCardList";
import { useNavigate } from "react-router-dom";

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
}

function HackathonCard({ items }: PropTypes) {
  const history = useNavigate();
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card onClick={() => history(`/team/${item.id}`)}>
            <TeamCardContents
              name={item.name}
              contact={item.contact}
              startTime={item.startTime}
              endTime={item.endTime}
            />
            <TeamRecruimentCardList recruiment={item.recruiment} />
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
  background-color: inherit;
  flex-wrap: wrap;
  & > div {
    margin: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 0.7rem;
  width: 25rem;
  height: min-content;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #c3a6a0;
  border-radius: 8px;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
