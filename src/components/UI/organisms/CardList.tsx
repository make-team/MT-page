import React from "react";
import styled from "styled-components";

import Card from "components/UI/molecules/layout/Card";

export interface PropTypes {
  items: {
    id: number;
    title: string;
    content: string;
  }[];
  add?: boolean;
  toUrl?: string;
}

function CardList({ items, add, toUrl }: PropTypes) {
  return (
    <List>
      {items.map((item) => (
        <Card toUrl={`${toUrl}/{item.id}`} key={item.id}>
          <div>{item.id}</div>
        </Card>
      ))}
      {add && (
        <Card key="0" toUrl={`${toUrl}/regist`}>
          <div> 등록하기 </div>
        </Card>
      )}
    </List>
  );
}

export default CardList;

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
