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
      <Info>
        <div>
          <h3> - 팀 명 -</h3>
          <DetailItem
            name="name"
            content={name}
            onChange={modifyStatus ? onChange : undefined}
          />
        </div>
        <div>
          <h3> - 연락처 - </h3>
          <DetailItem
            name="contact"
            content={contact}
            onChange={modifyStatus ? onChange : undefined}
          />
        </div>
        <div>
          <h3> - 참여하는 공모전 - </h3>
          {hackathon &&
            hackathon.map((item) => (
              <div key={item.id}>
                <a href={`/hackathon/${item.id}`}>{item.title} </a>
              </div>
            ))}
        </div>
      </Info>
      <h3> - 팀 상세 - </h3>
      <TextEditorBox>
        <Quill
          name="description"
          toolbarOff={modifyStatus}
          text={description}
          onChange={onChange}
        />
      </TextEditorBox>
      <Info>
        <h3> - 기 간 - </h3>
        <div>
          {modifyStatus ? (
            <StartEndPicker
              startTime={startTime}
              endTime={endTime}
              onChange={onChange}
            />
          ) : (
            <DateTerm startTime={startTime} endTime={endTime} />
          )}
        </div>
      </Info>
    </Wrapper>
  );
}

export default TeamDetailContents;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Info = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const TextEditorBox = styled.div`
  height: 22rem;
  margin-bottom: 3rem;
  background-color: inherit;
`;
