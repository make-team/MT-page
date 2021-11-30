import React from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";
import DateTerm from "../molecules/DateTerm";
import CardItem from "../molecules/CardItem";

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
  add?: boolean;
  toUrl?: string;
}

function HackathonTeamCardContents({
  name,
  description,
  contact,
  startTime,
  endTime,
  add,
  toUrl,
}: PropTypes) {
  return (
    <Wrapper>
      <CardItem contentTitle="팀  명 : " content={name} />
      <CardItem contentTitle="연락처 : " content={contact} />
      <div>모집기간</div>
      <DateTerm startTime={startTime} endTime={endTime} />
      <CardItem contentTitle="상세 설명 : " content={description} />
    </Wrapper>
  );
}

export default HackathonTeamCardContents;

const Wrapper = styled.div``;
