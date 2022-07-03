import React from "react";
import styled from "styled-components";

import DateTerm from "components/common/date/term";

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
      <Name>{name}</Name>
      {hackathon && <Sub>공모 : {hackathon.title}</Sub>}
      <div>팀원 모집중</div>
      <Date>
        <DateTerm startTime={startTime} endTime={endTime} />
      </Date>
    </Wrapper>
  );
}

export default TeamCardContents;

const Wrapper = styled.div``;
const Name = styled.h2`
  margin: 0;
`;
const Sub = styled.div`
  font-size: 1rem;
  color: gray;
  margin-bottom: 1rem;
`;
const Date = styled.div`
  display: flex;
  justify-content: center;
`;
