import React from "react";
import styled from "styled-components";

import TeamCard from "../../components/template/TeamCard";

const MOCK_PERSON_LIST = [
  {
    id: 1,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 2,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 3,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 4,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 5,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 6,
    title: "제목",
    description: "설명",
    contact: "연락처",
    startTime: new Date(),
    endTime: new Date(),
  },
];

interface PropTypes {
  toUrl: string;
}

function HackathonTeamContainer({ toUrl }: PropTypes) {
  return (
    <Wrapper>
      <TeamCard items={MOCK_PERSON_LIST} add={true} toUrl={toUrl} />
    </Wrapper>
  );
}

export default HackathonTeamContainer;

const Wrapper = styled.div`
  grid-area: list;
`;
