import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

import TeamCardContents from "./Contents";
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

function TeamCard({ items }: PropTypes) {
  const history = useNavigate();
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card key={item.id} onClick={() => history(`/team/${item.id}`)}>
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

export default TeamCard;

const List = styled.div`
  display: flex;
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
  background-color: ${(props) => props.theme.menu};
  border-radius: 8px;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
