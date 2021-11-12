import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import Radio from "../common/Radio";

import { FIELD } from "../../constant/input";

function TeamRegist() {
  const [addActive, setAddActive] = useState<Boolean>(false);
  const [team, setTeam] = useState([{}]);
  const [teamContents, setTeamContents] = useState({
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
    field: number;
    skill: string;
    count: number;
  }) => {
    setTeam((prev) => [...prev, { skill, field, count }]);
    setAddActive(false);
  };

  const changeTeamContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamContents(prev => ...prev, [name]: value);
  };
  return (
    <div>
      <RegistForm>
        <InputWrapper>
          <div>팀 소개 : </div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>모집 기간 : </div>
          <DatePicker
            endTime={new Date()}
            startTime={new Date()}
            onChange={() => {}}
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
                onChange={changeTeamContents}
              />
            </InputWrapper>
            <InputWrapper>
              <div>요구 기술 : </div>
              <input
                name="skill"
                onChange={changeTeamContents}
                placeholder="ex) java, react"
              ></input>
            </InputWrapper>
            <InputWrapper>
              <div>모집 인원 : </div>
              <input
                name="count"
                onChange={changeTeamContents}
                placeholder="숫자만 입력 가능합니다"
              ></input>
            </InputWrapper>
            <button
              onClick={() =>
                submitAddTeam(teamContents)
              }
            >
              추가하기
            </button>
          </AddTeamWrapper>
        )}
        {team && (
          <div>
            {team.map((item, index) => (
              <div key={index}>
                {Object.entries(item).map((content) => (
                  <div key={index}>{content}</div>
                ))}
              </div>
            ))}
          </div>
        )}
        <InputWrapper>
          <div>연락처(이메일 , 오픈카톡 등등...)</div>
          <input></input>
        </InputWrapper>
      </RegistForm>
    </div>
  );
}

export default TeamRegist;

const RegistForm = styled.div`
  grid-area: main;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const AddTeamWrapper = styled.div`
  background-color: black;
  border: 1px solid greenyellow;
  margin-bottom: 1rem;
  padding: 1rem;
`;
