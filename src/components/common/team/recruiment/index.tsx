import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";

export interface PropTypes {
  field: keyof typeof FIELD;
  skill: string;
  count: number;
}

function TeamRecruimentItem({ field, skill, count }: PropTypes) {
  return (
    <Wrapper>
      <div>모집 분야 : {FIELD[field]}</div>
      <div>요구 기술 : {skill}</div>
      <div>요구 인원 : {count}</div>
    </Wrapper>
  );
}
export default TeamRecruimentItem;

const Wrapper = styled.div`
  max-width: fit-content;
  padding: 0.2rem;
  border: 1px dashed var(--color);
  margin: 0.2rem;
`;
