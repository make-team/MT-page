import React from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import Radio from "../common/Radio";

import { INTEREST, SKILL } from "../../constant/input";

function TeamRegist() {
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
          <div>활동 구역 : </div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>모집 팀원 : </div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>요구 기술 스택 : </div>
          <Radio name="SKILL" list={Object.entries(SKILL)} />
        </InputWrapper>
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
