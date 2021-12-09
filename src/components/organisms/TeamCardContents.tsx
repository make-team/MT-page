import React from "react";
import styled from "styled-components";

import CardItem from "components/molecules/CardItem";
import DateTerm from "components/molecules/DateTerm";

export interface TeamCard {
  hackathon?: {
    id: number;
    title: string;
  };
  name: string;
  contact: string;
  startTime: Date;
  endTime: Date;
}

function TeamCardContents({
  name,
  hackathon,
  contact,
  startTime,
  endTime,
}: TeamCard) {
  return (
    <Wrapper>
      {hackathon && (
        <CardItem contentTitle="공모전 명 : " content={hackathon.title} />
      )}
      <CardItem contentTitle="팀 명  : " content={name} />

      <CardItem contentTitle="연 락 처 : " content={contact} />
      <CardItem
        contentTitle="기간 : "
        content={<DateTerm startTime={startTime} endTime={endTime} />}
      />
    </Wrapper>
  );
}

export default TeamCardContents;

const Wrapper = styled.div``;
