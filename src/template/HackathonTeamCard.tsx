import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

import TeamCardContents from "components/organisms/TeamCardContents";
import TeamRecruimentCardList from "components/organisms/TeamRecruimentCardList";
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
  flex-wrap: wrap;
  background-color: #f7f1f0;
`;

const Card = styled.div`
  border: 1px solid black;
  width: 100%;
`;
