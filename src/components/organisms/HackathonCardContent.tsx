import React from "react";
import styled from "styled-components";

import CardImg, { Img } from "../molecules/ImgBox";
import CardItem from "../molecules/CardItem";
import DateTerm from "../molecules/DateTerm";

export interface PropTypes {
  cardImg: Img[];
  title: string;
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
  description,
  contact,
}: PropTypes) {
  return (
    <Wrapper>
      <CardImg attachment={cardImg} />
      <CardItem contentTitle="공모전 명 : " content={title} />
      <CardItem contentTitle="상세 설명 : " content={description} />
      <CardItem contentTitle="연 락 처 : " content={contact} />
      <CardItem
        contentTitle="기간 : "
        content={<DateTerm startTime={startTime} endTime={endTime} />}
      />
    </Wrapper>
  );
}

export default HackathonCardContent;

const Wrapper = styled.div`
  text-align: left;
  & > div {
    margin-bottom: 0.5rem;
  }
`;
