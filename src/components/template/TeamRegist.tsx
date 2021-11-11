import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import Radio from "../common/Radio";

import { SKILL, JOB, INTEREST } from "../../constant/input";

function TeamRegist() {
  const [addActive, setAddActive] = useState<Boolean>(false);
  const [team, setTeam] = useState([{}]);
  const [job, setJob] = useState<number>(0);
  const [skill, setSkill] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);

  const ClickTeamAdd = () => {
    setAddActive((prev) => !prev);
  };

  const submitAddTeam = ({
    job,
    skill,
    interest,
  }: {
    job?: keyof typeof JOB;
    skill?: keyof typeof SKILL;
    interest?: keyof typeof INTEREST;
  }) => {
    setTeam((prev) => [
      ...prev,
      { job: typeof JOB, skill: typeof SKILL, interest: typeof INTEREST },
    ]);
    setAddActive(false);
  };

  const changeSkill = (value: number) => {
    setJob(value);
  };
  const changeJob = (value: number) => {
    setSkill(value);
  };
  const changeInterest = (value: number) => {
    setInterest(value);
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
              <div>직업 : </div>
              <Radio
                name="JOB"
                list={Object.entries(JOB)}
                onChange={changeJob}
              />
            </InputWrapper>
            <InputWrapper>
              <div>요구 기술 스택 : </div>
              <Radio
                name="SKILL"
                list={Object.entries(SKILL)}
                onChange={changeSkill}
              />
            </InputWrapper>
            <InputWrapper>
              <div>관심사 : </div>
              <Radio
                name="INTEREST"
                list={Object.entries(INTEREST)}
                onChange={changeInterest}
              />
            </InputWrapper>
            <button
              onClick={() =>
                submitAddTeam({
                  job: 1,
                  skill: 1,
                  interest: 1,
                })
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
`;
