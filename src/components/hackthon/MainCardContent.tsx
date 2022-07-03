import React from "react";
import styled from "styled-components";

import CardImg, { Img } from "../common/ImgBox";
import CardItem from "../common/card/ItemWrapper";
import DateTerm from "../common/date/term";

export interface PropTypes {
  cardImg: Img[];
  title: string;
  hit: number;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
}

function HackathonCardContent({
  cardImg,
  endTime,
  startTime,
  title,
  hit,
  description,
  contact,
}: PropTypes) {
  return (
    <Wrapper>
      <CardImg attachment={cardImg} height="17rem" />
      <Intro>
        <div>{title}</div>
        {`🔎${hit}`}
      </Intro>
      <CardItem
        content={<DateTerm startTime={startTime} endTime={endTime} />}
      />
    </Wrapper>
  );
}

export default HackathonCardContent;

const Wrapper = styled.div`
  & > div {
    margin: 0.2rem 0;
  }
`;
const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;
