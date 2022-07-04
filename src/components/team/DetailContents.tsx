import React from "react";
import styled from "styled-components";

import DetailItem from "../common/modify/ModifyItem";
import Quill from "components/common/editor/Quill";
import StartEndPicker from "components/common/date/stardEnd";
import DateTerm from "components/common/date/term";

interface PropTypes {
  name: string;
  hackathon: {
    id: number;
    title: string;
  }[];
  modifyStatus: boolean;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function TeamDetailContents({
  name,
  hackathon,
  description,
  contact,
  startTime,
  endTime,
  modifyStatus,
  onChange,
}: PropTypes) {
  return (
    <Wrapper>
      <Intro>
        <div>팀 |</div>
        <DetailItem
          name="name"
          modifyStatus={modifyStatus}
          content={name}
          onChange={onChange}
        />
      </Intro>
      <Intro>
        참여할 공모전 -
        {hackathon &&
          hackathon.map((item) => (
            <div key={item.id}>
              {item.title}
              <a href={`/hackathon/${item.id}`}> 자세히보러가기 </a>
            </div>
          ))}
      </Intro>
      <TextEditorBox>
        <Quill
          name="description"
          toolbarOff={modifyStatus}
          text={description}
          onChange={onChange}
        />
      </TextEditorBox>
      <Intro>
        팀원 모집기간 |{" "}
        {modifyStatus ? (
          <StartEndPicker
            startTime={startTime}
            endTime={endTime}
            onChange={onChange}
          />
        ) : (
          <DateTerm startTime={startTime} endTime={endTime} />
        )}
        연락처 |{" "}
        <DetailItem name="contact" content={contact} onChange={onChange} />
      </Intro>
    </Wrapper>
  );
}

export default TeamDetailContents;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Intro = styled.div`
  display: flex;
  font-size: 1.2rem;
`;

const TextEditorBox = styled.div`
  height: 22rem;
  margin-bottom: 3rem;
  background-color: var(--editor);
`;
