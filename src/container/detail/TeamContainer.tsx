import React from "react";

import CardList from "../../components/template/CardList";

const MOCK_HACHATHON_LIST = [
  {
    id: 1,
    title: "팀",
    content: "내용1",
  },
  {
    id: 2,
    title: "팀",
    content: "내용1",
  },
  {
    id: 3,
    title: "팀",
    content: "내용1",
  },
  {
    id: 4,
    title: "팀",
    content: "내용1",
  },
  {
    id: 5,
    title: "팀",
    content: "내용1",
  },
];

interface PropTypes {
  toUrl: string;
}

function CardListTeamContainer({ toUrl }: PropTypes) {
  return <CardList items={MOCK_HACHATHON_LIST} add={true} toUrl={toUrl} />;
}

export default CardListTeamContainer;
