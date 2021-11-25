import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import Radio from "../common/Radio";

import { FIELD } from "../../constant/checkItems";

export interface Team {
  id: number;
  hackathonId: number;
  name: string;
  description: string;
  recruiment: { field?: keyof typeof FIELD; skill?: string; count?: number }[];
  contact: string;
  endTime: Date;
  startTime: Date;
}

export interface PropTypes {
  contents: Team;
  recruiment: Team["recruiment"];
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  onAddRecruiment: ({
    field,
    skill,
    count,
  }: {
    field?: keyof typeof FIELD;
    skill?: string;
    count?: number;
  }) => void;
}

function TeamRegist({
  contents,
  recruiment,
  onChange,
  onAddRecruiment,
}: PropTypes) {
  const [addActive, setAddActive] = useState<Boolean>(false);
  const [teamContents, setTeamContents] = useState<{
    field?: keyof typeof FIELD;
    skill?: string;
    count?: number;
  }>();

  const ClickTeamAdd = () => {
    setAddActive((prev) => !prev);
  };

  const submitAddTeam = ({
    field,
    skill,
    count,
  }: {
    field?: keyof typeof FIELD;
    skill?: string;
    count?: number;
  }) => {
    onAddRecruiment({ field, skill, count });
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
        <div>팀 명 : </div>
        <input name="name" onChange={contentsChange}></input>
      </InputWrapper>
      <InputWrapper>
        <div>팀 소개 : </div>
        <input name="description" onChange={contentsChange}></input>
      </InputWrapper>
      <InputWrapper>
        <div>모집 기간 : </div>
        <DatePicker
          endTime={new Date()}
          startTime={new Date()}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <div>모집 팀원 등록하기</div> :
        <button onClick={ClickTeamAdd}>추가하기</button>
      </InputWrapper>
      {addActive && (
        <AddTeamWrapper>
          <InputWrapper>
            <div> 모집 분야 : </div>
            <Radio
              name="field"
              list={Object.entries(FIELD)}
              onChange={teamContentChange}
            />
          </InputWrapper>
          <InputWrapper>
            <div>요구 기술 : </div>
            <input
              name="skill"
              onChange={teamContentChange}
              placeholder="ex) java, react"
            ></input>
          </InputWrapper>
          <InputWrapper>
            <div>모집 인원 : </div>
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
          {recruiment.map(({ field, count, skill }, index) => (
            <div key={index}>
              <div>분야 : {field && FIELD[field]}</div>
              <div>기술 : {skill}</div>
              <div>인원 : {count}</div>
              <button> 삭제 </button>
            </div>
          ))}
        </TeamRecruitmentCard>
      )}
      <InputWrapper>
        <div>연락처(이메일 , 오픈카톡 등등...)</div>
        <input name="contact" onChange={contentsChange}></input>
      </InputWrapper>
    </Wrapper>
  );
}

export default TeamRegist;

const Wrapper = styled.div`
  align-content: center;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: flex;
  width: auto;
  margin-bottom: 2rem;
`;

const AddTeamWrapper = styled.div`
  border: 1px solid #262220;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const TeamRecruitmentCard = styled.div`
  display: flex;
  background-color: #c3a6a0;
  text-align: left;
  margin: 1rem;
  width: min-content;
  & > div {
    width: 15rem;
    border: 1px solid black;
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
