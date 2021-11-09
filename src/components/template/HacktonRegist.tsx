import React from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import Radio from "../common/Radio";

import { INTEREST, SKILL } from "../../constant/input";
import ImgUpload from "../common/ImgUpload";

function HacktonRegist() {
  return (
    <div>
      <RegistForm>
        <InputWrapper>
          <div>포스터 업로드</div>
          <ImgUpload onChange={() => {}} />
        </InputWrapper>
        <InputWrapper>
          <div>제목</div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>기간</div>
          <DatePicker />
        </InputWrapper>
        <InputWrapper>
          <div>관련 분야</div>
          <Radio name="INTEREST" list={Object.entries(INTEREST)} />
        </InputWrapper>
        <InputWrapper>
          <div>모집인원</div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>요구 기술 스택</div>
          <Radio name="SKILL" list={Object.entries(SKILL)} />
        </InputWrapper>
        <InputWrapper>
          <div>모집인원</div>
          <input></input>
        </InputWrapper>
        <InputWrapper>
          <div>참가 문의 연락처(이메일 , 오픈카톡 등등...)</div>
          <input></input>
        </InputWrapper>
      </RegistForm>
    </div>
  );
}

export default HacktonRegist;

const RegistForm = styled.div`
  grid-area: main;
`;

const InputWrapper = styled.div`
  display: flex;
`;
