import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import HackathonCardContent from "components/organisms/HackathonCardContent";

import { boardListSelector } from "store/hackathonList";

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

function HackathonCard() {
  const data = useRecoilValue(boardListSelector);
  const history = useNavigate();
  return (
    <List>
      {data &&
        data.map((item) => (
          <Card key={item.id} onClick={() => history(`/hackathon/${item.id}`)}>
            <HackathonCardContent
              cardImg={item.attachment}
              endTime={item.endTime}
              startTime={item.startTime}
              contact={item.contact}
              title={item.title}
              hit={item.hit}
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
  flex-wrap: wrap;
  justify-content: center;
  background-color: inherit;
`;

const Card = styled.div`
  cursor: pointer;
  height: 20rem;
  width: 16rem;
  padding: 0.5rem;
  margin: 1rem 1rem;
  border-radius: 8px;
  background-color: #c3a6a0;
  &:hover {
    transform: scale(1.2, 1.2);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
