import React, { useCallback } from "react";
import styled from "styled-components";

import HackathonDetailContents, {
  PropTypes as DetailContentsPropTypes,
} from "./DetailContents";

import CardImg from "components/common/image/ImgBox";

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
      <HackathonDetailContents
        description={contents.description}
        contact={contents.contact}
        startTime={contents.startTime}
        endTime={contents.endTime}
        onChange={modifyStatus ? contentsChange : undefined}
      />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex: 1;
  }
`;

const ImgBox = styled.div`
  min-width: 25rem;
  height: 30rem;
`;
