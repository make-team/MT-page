import React, { useCallback } from "react";
import styled from "styled-components";

import HackathonDetailContents, {
  PropTypes as DetailContentsPropTypes,
} from "components/organisms/HackathonDetailContents";

import CardImg from "components/molecules/ImgBox";

export interface Hackathon {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  hit: number;
  attachment?: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
}

export interface PropTypes {
  contents: Hackathon;
  modifyStatus: boolean;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ contents, modifyStatus, onChange }: PropTypes) {
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
      <CardImg attachment={contents.attachment} height="50rem" width="30rem" />
      <HackathonDetailContents
        description={contents.description}
        contact={contents.contact}
        startTime={contents.startTime}
        endTime={contents.endTime}
        onChange={modifyStatus ? undefined : contentsChange}
      />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
`;
