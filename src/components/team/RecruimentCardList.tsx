import React from "react";
import styled from "styled-components";

import TeamRecruimentItem from "components/common/team/recruiment";

import { FIELD } from "constant/checkItems";

interface PropTypes {
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

function TeamRecruimentCardList({ recruiment }: PropTypes) {
  return (
    <Wrapper>
      {recruiment.map((item) => {
        return (
          <TeamRecruimentItem
            key={item.field + item.skill + item.count}
            field={item.field}
            skill={item.skill}
            count={item.count}
          />
        );
      })}
    </Wrapper>
  );
}

export default TeamRecruimentCardList;

const Wrapper = styled.div`
  grid-area: list;
  display: flex;
  height: 3.75rem;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  &:hover {
    overflow-y: unset;
    height: fit-content;
  }
`;
