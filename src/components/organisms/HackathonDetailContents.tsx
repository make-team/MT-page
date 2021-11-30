import React from "react";
import styled from "styled-components";

import CardImg from "components/molecules/ImgBox";
import DetailItem from "../molecules/ModifyItem";
import StartEndPicker from "../molecules/form/StartEndPicker";

export interface PropTypes {
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  attachment?: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetailContents({
  endTime,
  startTime,
  description,
  contact,
  attachment,
  onChange,
}: PropTypes) {
  return (
    <Wrapper>
      <CardImg attachment={attachment} />
      <div>모집기간</div>
      <StartEndPicker
        startTime={startTime}
        endTime={endTime}
        onChange={onChange}
      />
      <DetailItem title="설명 : " content={description} onChange={onChange} />
      <DetailItem title="연락처 : " content={contact} onChange={onChange} />
    </Wrapper>
  );
}

export default HackathonDetailContents;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  &:nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
`;
