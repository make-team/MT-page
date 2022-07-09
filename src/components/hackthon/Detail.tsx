import React, { useCallback } from "react";
import styled from "styled-components";

import HackathonDetailContents, {
  PropTypes as DetailContentsPropTypes,
} from "./DetailContents";

import CardImg from "components/common/image/ImgBox";
import StartEndPicker from "../common/date/stardEnd";

export interface Hackathon {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  hit: number;
}

export interface Attachment {
  imgUrl: string;
  uuid: string;
  name: string;
  size: number;
  contentType: string;
}

export interface PropTypes {
  contents: Hackathon;
  img?: Attachment[];
  modifyStatus: boolean;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ contents, img, modifyStatus, onChange }: PropTypes) {
  const startDate = `${contents.startTime.getFullYear()}.${
    contents.startTime.getMonth() + 1
  }.${contents.startTime.getDate()}`;

  const endDate = `${contents.endTime.getFullYear()}.${
    contents.endTime.getMonth() + 1
  }.${contents.endTime.getDate()}`;

  const contentsChange = useCallback<
    Exclude<DetailContentsPropTypes["onChange"], undefined>
  >(
    ({ name, value }) => {
      onChange({ name, value });
    },
    [onChange]
  );

  return (
    <Wrapper>
      <ImgBox>
        <CardImg attachment={img} height="100%" width="100%" />
      </ImgBox>
      <ContentsWrapper>
        <HackathonDetailContents
          description={contents.description}
          contact={contents.contact}
          onChange={modifyStatus ? contentsChange : undefined}
        />
        <Title>- 기 간 -</Title>
        {modifyStatus ? (
          <StartEndPicker
            startTime={contents.startTime}
            endTime={contents.endTime}
            onChange={modifyStatus ? contentsChange : undefined}
          />
        ) : (
          <DateWrapper>
            <div>{`${startDate}`}</div>~<div>{`${endDate}`}</div>
          </DateWrapper>
        )}
      </ContentsWrapper>
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div`
  margin: 1rem 0;
`;
const ImgBox = styled.div`
  flex: 1;
  min-width: 25rem;
  height: 30rem;
`;

const ContentsWrapper = styled.div`
  flex: 1;
  padding: 1rem;
`;

const DateWrapper = styled.div`
  display: flex;
  & > div {
    margin: 0 1rem;
  }
`;
