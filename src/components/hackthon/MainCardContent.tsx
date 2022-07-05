import React from "react";
import styled from "styled-components";

import CardImg, { Img } from "../common/image/ImgBox";
import CardItem from "../common/card/ItemWrapper";
import DateTerm from "../common/date/term";
import Card from "components/common/card/wrapper";

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
    <Card margin="0.5rem">
      <div>
        <CardImg attachment={cardImg} height="14rem" />
        <Title>
          <div>{title}</div>
          {`🔎${hit ? hit : 0}`}
        </Title>
        <CardItem
          content={<DateTerm startTime={startTime} endTime={endTime} />}
        />
      </div>
    </Card>
  );
}

export default HackathonCardContent;

const Title = styled.div`
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
`;
