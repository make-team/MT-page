import React from "react";
import styled from "styled-components";

import Card from "../common/Card";

export interface PropTypes {
  items: {
    id: number;
    title: string;
    content: string;
  }[];
}

function CardList({ items }: PropTypes) {
  return (
    <List>
      {items.map((item) => (
        <Card key={item.id}>
          <div>{item.id}</div>
        </Card>
      ))}
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
