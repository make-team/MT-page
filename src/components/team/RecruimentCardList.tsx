import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

interface PropTypes {
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

function RecruimentCardList({ recruiment }: PropTypes) {
  return (
    <Wrapper>
      {recruiment.map((item, index) => {
        return (
          <Item key={index}>
            <div>분야 : {FIELD[item.field]}</div>
            <div>기술 : {item.skill}</div>
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default RecruimentCardList;

const Wrapper = styled.div`
  display: flex;
  text-align: left;
  font-size: 0.6rem;
`;

const Item = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${(props) => props.theme.menu};
`;
