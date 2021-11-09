import React from "react";
import styled from "styled-components";

import Radio from "../common/Radio";

import { INTEREST, SKILL } from "../../constant/input";
import ImgUpload from "../common/ImgUpload";

function PersonRegist() {
  return (
    <div>
      <RegistForm>
        <ImgWrapper>
          <div>img</div>
          <InputWrapper>
            <ImgUpload onChange={() => {}} />
          </InputWrapper>
        </ImgWrapper>
        <div>
          <InputWrapper>
            <div>이름 : </div>
            <input></input>
          </InputWrapper>
          <InputWrapper>
            <div>활동 구역 : </div>
            <input></input>
          </InputWrapper>
          <InputWrapper>
            <div>자기소개 : </div>
            <input></input>
          </InputWrapper>
          <InputWrapper>
            <div>보유 기술 스택 : </div>
            <Radio name="SKILL" list={Object.entries(SKILL)} />
          </InputWrapper>
          <InputWrapper>
            <div>관심 분야 : </div>
            <Radio name="INTEREST" list={Object.entries(INTEREST)} />
          </InputWrapper>
          <InputWrapper>
            <div>연락처(이메일 , 오픈카톡 등등...) : </div>
            <input></input>
          </InputWrapper>
        </div>
      </RegistForm>
    </div>
  );
}

export default PersonRegist;

const RegistForm = styled.div`
  display: flex;
  grid-area: main;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  & > div:first-child {
    height: 12.625rem;
    width: 13.375rem;
    background-color: green;
    margin: 1rem;
  }
`;
