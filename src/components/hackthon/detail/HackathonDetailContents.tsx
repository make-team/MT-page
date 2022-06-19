import React from "react";
import styled from "styled-components";

import DetailItem from "../../common/modify/ModifyItem";
import StartEndPicker from "../../common/date/StartEndPicker";

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
      <StartEndPicker
        startTime={startTime}
        endTime={endTime}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default HackathonDetailContents;

const Wrapper = styled.div`
  padding: 1rem;
`;