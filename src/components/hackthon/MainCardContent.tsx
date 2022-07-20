import styled from "styled-components";

import CardImg, { Img } from "../common/image/ImgBox";
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
    <Card>
      <>
        <CardImg attachment={cardImg} height="14rem" />
        <Title>
          <div>{title}</div>
        </Title>
        <Contents>
          <DateTerm startTime={startTime} endTime={endTime} />
          <div>설명 : {description}</div>
          <div>연락 : {contact}</div>
        </Contents>
      </>
    </Card>
  );
}

export default HackathonCardContent;

const Title = styled.div`
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Contents = styled.div`
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
