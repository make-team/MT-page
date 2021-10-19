import React from "react";
import styled from "styled-components";

import Card from "../common/Card";

function CardList() {
  return (
    <List>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </List>
  );
}

export default CardList;

const List = styled.div`
  display: flex;
  background-color: #2d3436;
  flex-wrap: wrap;
  & > div {
    margin: 1rem 1rem;
  }
`;
