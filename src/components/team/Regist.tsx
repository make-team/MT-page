import React, { useState } from "react";
import styled from "styled-components";

import Radio from "components/common/RadioList";

import { FIELD } from "constant/checkItems";
import StartEndPicker from "components/common/date/stardEnd";
import Quill from "components/common/Quill";

export interface Team {
  id: number;
  hackathonId: number;
  name: string;
  description: string;
  recruiment: {
    id: number;
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }[];
  contact: string;
  endTime: Date;
  startTime: Date;
}

export interface PropTypes {
  contents: Team;
  recruiment: Team["recruiment"];
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  onAddRecruiment: ({
    id,
    field,
    skill,
    count,
  }: {
    id: number;
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }) => void;
  onDelete: (id: number) => void;
}

function TeamRegist({
  contents,
  recruiment,
  onChange,
  onAddRecruiment,
  onDelete,
}: PropTypes) {
  const [addActive, setAddActive] = useState<Boolean>(false);
  const [recruimentId, setRecruimentId] = useState<number>(0);
  const [teamContents, setTeamContents] = useState<{
    id: number;
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }>({
    id: recruimentId,
    field: 0,
    skill: "",
    count: 0,
  });

  const ClickTeamAdd = () => {
    setAddActive((prev) => !prev);
  };

  const submitAddTeam = ({
    id,
    field,
    skill,
    count,
  }: {
    id: number;
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }) => {
    onAddRecruiment({ id: recruimentId, field, skill, count });
    setRecruimentId(recruimentId + 1);
    setAddActive(false);
  };

  const teamContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamContents((prev) => ({ ...prev, [name]: value }));
  };

  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <Wrapper>
      <h1>팀 등록하기</h1>
      <InputWrapper>
        <div>팀 명</div>
        <input name="name" onChange={contentsChange}></input>
      </InputWrapper>
      <TextEditor>
        <div>팀 소개</div>
        <Quill
          toolbarOff={true}
          name="description"
          text={contents.description}
          onChange={onChange}
        ></Quill>
      </TextEditor>
      <InputWrapper>
        <div>모집 기간</div>
        <StartEndPicker
          endTime={contents.endTime}
          startTime={contents.startTime}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <div>연락처(이메일 , 오픈카톡 등등...)</div>
        <input name="contact" onChange={contentsChange}></input>
      </InputWrapper>
      <InputWrapper>
        <div>모집 팀원 등록하기</div>
        <button onClick={ClickTeamAdd}>추가하기</button>
      </InputWrapper>
      {addActive && (
        <AddTeamWrapper>
          <InputWrapper>
            <div> 모집 분야 </div>
            <Radio
              name="field"
              list={Object.entries(FIELD)}
              onChange={teamContentChange}
            />
          </InputWrapper>
          <InputWrapper>
            <div>요구 기술 </div>
            <input
              name="skill"
              onChange={teamContentChange}
              placeholder="ex) java, react"
            ></input>
          </InputWrapper>
          <InputWrapper>
            <div>모집 인원 </div>
            <input
              name="count"
              onChange={teamContentChange}
              placeholder="숫자만 입력 가능합니다"
            ></input>
          </InputWrapper>
          <button onClick={() => teamContents && submitAddTeam(teamContents)}>
            추가하기
          </button>
        </AddTeamWrapper>
      )}
      {contents.recruiment && (
        <TeamRecruitmentCard>
          {recruiment.map(({ id, field, count, skill }) => (
            <div key={id}>
              <div>분야 - {field && FIELD[field]}</div>
              <div>기술 - {skill}</div>
              <div>인원 - {count}</div>
              <button onClick={() => onDelete(id)}> 삭제 </button>
            </div>
          ))}
        </TeamRecruitmentCard>
      )}
    </Wrapper>
  );
}

export default TeamRegist;

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 1rem;
  height: 2rem;
  & > div {
    &:first-child {
      background-color: #a15c38;
      color: white;
      padding: 0.25rem 1rem 1rem 1rem;
      margin-right: 1rem;
    }
  }
`;

const AddTeamWrapper = styled.div`
  border: 1px solid #262220;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const TeamRecruitmentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  width: 100%;
  margin: 1rem;
  & > div {
    background-color: #c3a6a0;
    border: 3px solid black;
    width: min-content;
    margin: 0.5rem;
    & > div {
      padding: 1rem;
    }
    & > button {
      width: 5rem;
      margin-left: 10rem;
    }
  }
`;

const TextEditor = styled.div`
  height: 24rem;
  width: 90%;
  margin: 0 auto 4rem auto;
  & > div:last-child {
    height: 20rem;
    background-color: white;
  }
`;