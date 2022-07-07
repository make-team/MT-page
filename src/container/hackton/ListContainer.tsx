import React, { useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { boardListSelector } from "store/hackathonList";

import HackathonCardContent from "../../components/hackthon/MainCardContent";

export interface Hackathon {
  id: number;
  title: string;
  hit: number;
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

interface PropTypes {
  goDetail: (id: number) => void;
}

function ListContainer({ goDetail }: PropTypes) {
  const data = useRecoilValue(boardListSelector);

  const handleClick = useCallback<PropTypes["goDetail"]>(
    (id) => {
      goDetail(id);
    },
    [goDetail]
  );

  return (
    <List>
      {data &&
        data.map((item) => (
          <div key={item.id} onClick={() => handleClick(item.id)}>
            <HackathonCardContent
              title={item.title}
              hit={item.hit}
              cardImg={item.attachment}
              endTime={item.endTime}
              startTime={item.startTime}
              contact={item.contact}
              description={item.description}
            />
          </div>
        ))}
    </List>
  );
}

export default ListContainer;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
  grid-gap: 1rem;
  background-color: inherit;
`;
