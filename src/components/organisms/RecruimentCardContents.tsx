import React from "react";
import styled from "styled-components";
import { FIELD } from "constant/checkItems";

export interface Recruiment {
  field: keyof typeof FIELD;
  skill: string;
  count: number;
}

export interface PropTypes {
  items?: Recruiment[];
  add?: boolean;
  toUrl?: string;
}

function RecruimentCardContents({ items, add, toUrl }: PropTypes) {
  return (
    <Wrapper>
      <div>
        <div> - 모집 공고 -</div>
        {items && items.length > 0 && (
          <CardList>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <div>모집 분야 : {FIELD[item.field]}</div>
                  <div>요구 기술 : {item.skill}</div>
                  <div>요구 인원 : {item.count}</div>
                </div>
              );
            })}
          </CardList>
        )}
      </div>
    </Wrapper>
  );
}

export default RecruimentCardContents;

const Wrapper = styled.div``;

const CardList = styled.div`
  display: flex;
  & > div {
    border: 0.25rem solid #262220;
    height: 4rem;
    width: 12rem;
    margin-right: 0.5rem;
    background-color: white;
  }
`;
