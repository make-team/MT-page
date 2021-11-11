import React from "react";

import TeamCard from "../../components/template/TeamCard";

const MOCK_HACHATHON_LIST = [
  {
    id: 1,
    title: "1",
    description: "설명",
    contact: "연ㄹ갗",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 2,
    title: "2",
    description: "설명",
    contact: "연ㄹ갗",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 3,
    title: "3",
    description: "설명",
    contact: "연ㄹ갗",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 4,
    title: "4",
    description: "설명",
    contact: "연ㄹ갗",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 5,
    title: "5",
    description: "설명",
    contact: "연ㄹ갗",
    startTime: new Date(),
    endTime: new Date(),
  },
];

interface PropTypes {
  toUrl: string;
}

function CardListTeamContainer({ toUrl }: PropTypes) {
  return <TeamCard items={MOCK_HACHATHON_LIST} add={true} toUrl={toUrl} />;
}

export default CardListTeamContainer;
