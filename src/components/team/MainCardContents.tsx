import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FIELD } from "constant/checkItems";
import DateTerm from "../common/date/term";
import CardItem from "../common/card/ItemWrapper";
import RecruimentCardContents from "../common/card/Recruiment";

export interface Team {
  id: number;
  hackathonId: number;
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

export interface PropTypes {
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
  add?: boolean;
  toUrl?: string;
}

function HackathonTeamCardContents({
  name,
  description,
  contact,
  startTime,
  endTime,
  recruiment,
  add,
  toUrl,
}: PropTypes) {
  const history = useNavigate();
  return (
    <Wrapper onClick={() => history(toUrl ?? "/")}>
      <div>
        <CardItem contentTitle="팀  명 : " content={name} />
        <CardItem contentTitle="연락처 : " content={contact} />
        <DateTerm startTime={startTime} endTime={endTime} />
      </div>
      <CardItem contentTitle="상세 설명 : " content={description} />
      <RecruimentCardContents items={recruiment} />
    </Wrapper>
  );
}

export default HackathonTeamCardContents;

const Wrapper = styled.div`
  cursor: pointer;
  height: 18rem;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.menu};
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
