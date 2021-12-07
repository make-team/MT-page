import React from "react";
import styled from "styled-components";

import DetailItem from "../molecules/ModifyItem";
import StartEndPicker from "../molecules/form/StartEndPicker";

export interface PropTypes {
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetailContents({
  endTime,
  startTime,
  description,
  contact,
  onChange,
}: PropTypes) {
  return (
    <Wrapper>
      <StartEndPicker
        startTime={startTime}
        endTime={endTime}
        onChange={onChange}
      />
      <DetailItem
        name="description"
        title="설명 : "
        content={description}
        onChange={onChange}
      />
      <DetailItem
        name="contact"
        title="연락처 : "
        content={contact}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default HackathonDetailContents;

const Wrapper = styled.div`
  padding: 1rem;
`;
