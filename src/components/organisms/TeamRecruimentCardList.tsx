import React from "react";
import styled from "styled-components";

import TeamRecruimentItem from "components/molecules/TeamRecruimentItem";

import { FIELD } from "constant/checkItems";

interface PropTypes {
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

function TeamRecruimentCardList({ recruiment }: PropTypes) {
  return (
    <>
      <h3> - 모집 중 - </h3>
      <Wrapper>
        {recruiment.map((item) => {
          return (
            <TeamRecruimentItem
              field={item.field}
              skill={item.skill}
              count={item.count}
            />
          );
        })}
      </Wrapper>
    </>
  );
}

export default TeamRecruimentCardList;

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
`;
