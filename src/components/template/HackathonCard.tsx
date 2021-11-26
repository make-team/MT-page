import React from "react";
import Card from "components/template/layout/Card";
import styled from "styled-components";

import HackathonCardContent from "components/UI/organisms/HackathonCardContent";

export interface Hackathon {
  id: number;
  title: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  attachment: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
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
            height="40rem"
            width="25rem"
            toUrl={`${toUrl}/${item.id}`}
            key={item.id}
          >
            <HackathonCardContent
              cardImg={item.attachment}
              endTime={item.endTime}
              startTime={item.startTime}
              contact={item.contact}
              title={item.title}
              description={item.description}
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
