import React from "react";

import CardList from "components/UI/organisms/CardList";

const MOCK_PERSON_LIST = [
  {
    id: 1,
    title: "이름",
    content: "소개",
  },
  {
    id: 2,
    title: "이름",
    content: "내용1",
  },
  {
    id: 3,
    title: "이름",
    content: "내용1",
  },
  {
    id: 4,
    title: "이름",
    content: "내용1",
  },
  {
    id: 5,
    title: "이름",
    content: "내용1",
  },
  {
    id: 6,
    title: "이름",
    content: "내용1",
  },
  {
    id: 7,
    title: "이름",
    content: "내용1",
  },
  {
    id: 8,
    title: "이름",
    content: "내용1",
  },
];

interface PropTypes {
  toUrl: string;
}

function CardListPersonContainer({ toUrl }: PropTypes) {
  return <CardList items={MOCK_PERSON_LIST} add={true} toUrl={toUrl} />;
}

export default CardListPersonContainer;
