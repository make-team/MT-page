import React from "react";
import styled from "styled-components";

import DateTerm from "components/common/date/term";

export interface TeamCard {
  hackathon?: {
    id: number;
    title: string;
  };
  name?: string;
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
      <Name>{name ?? name}</Name>
      {hackathon && <SubTitle>{hackathon.title}</SubTitle>}
      <Date>
        <DateTerm startTime={startTime} endTime={endTime} />
      </Date>
      {contact ? contact : "없음"}
    </Wrapper>
  );
}

export default TeamCardContents;

const Wrapper = styled.div`
  display: flex;
`;
const Name = styled.div`
  flex: 1;
`;
const SubTitle = styled.div`
  flex: 1;
`;
const Date = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
