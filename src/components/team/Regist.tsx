import React, { useState } from "react";
import styled from "styled-components";

import { FIELD } from "constant/checkItems";
import StartEndPicker from "components/common/date/stardEnd";
import Dropdown from "components/common/dropdown";
import DeleteButton from "components/common/button/delete";
import { Input } from "components/common/input";

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
    field,
    skill,
    count,
  }: {
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }) => {
    onAddRecruiment({ id: recruimentId, field, skill, count });
    setRecruimentId(recruimentId + 1);
    setTeamContents({
      id: recruimentId,
      field: 0,
      skill: "",
      count: 0,
    });
    setAddActive(false);
  };

  const teamContentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTeamContents((prev) => ({ ...prev, [name]: value }));
  };

  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <Wrapper>
      <div>
        <InputWrapper>
          <div>팀 명</div>
          <input name="name" onChange={contentsChange}></input>
        </InputWrapper>
        <InputWrapper>
          <div>팀 한줄 소개</div>
          <Input name="description" onChange={contentsChange} />
        </InputWrapper>
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
      </div>
      <TeamListWrapper>
        <InputWrapper>
          <div>모집 팀원 등록하기</div>
          <button onClick={ClickTeamAdd}>{addActive ? "취소" : "추가"}</button>
        </InputWrapper>
        {addActive && (
          <AddTeamWrapper>
            <InputWrapper>
              <div> 모집 분야 </div>
              <Dropdown
                name="field"
                list={FIELD}
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
                placeholder="모집하는 인원수 입력"
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
                <div>분야 - {field ? FIELD[field] : FIELD[0]}</div>
                <div>기술 - {skill}</div>
                <div>인원 - {count}</div>
                <DeleteButton id={id} onClick={onDelete} />
              </div>
            ))}
          </TeamRecruitmentCard>
        )}
      </TeamListWrapper>
    </Wrapper>
  );
}

export default TeamRegist;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
`;

const TeamListWrapper = styled.div``;

const InputWrapper = styled.div`
  padding: 1rem;
  & > div {
    &:first-child {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const AddTeamWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 20%;
  background-color: ${(props) => props.theme.menu};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 1rem;
  padding: 1rem;
`;

const TeamRecruitmentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25rem;
  margin: 1rem;
  & > div {
    padding: 0.3rem;
    margin: 0 0 0.5rem 0.5rem;
    background-color: ${(props) => props.theme.menu};
    & > button {
      width: 5rem;
      margin-left: 10rem;
    }
  }
`;
