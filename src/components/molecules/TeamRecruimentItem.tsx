import React from "react";

import { FIELD } from "constant/checkItems";
import { Div } from "../atoms/Div";

export interface PropTypes {
  field: keyof typeof FIELD;
  skill: string;
  count: number;
}

function TeamRecruimentItem({ field, skill, count }: PropTypes) {
  return (
    <Div>
      <div>모집 분야 : {FIELD[field]}</div>
      <div>요구 기술 : {skill}</div>
      <div>요구 인원 : {count}</div>
    </Div>
  );
}

export default TeamRecruimentItem;
