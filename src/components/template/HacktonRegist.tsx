import React from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import ImgUpload from "../common/ImgUpload";

function HacktonRegist() {
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
            <div>제목 : </div>
            <input></input>
          </InputWrapper>
          <InputWrapper>
            <div>기간 : </div>
            <DatePicker />
          </InputWrapper>
          <InputWrapper>
            <div>설명 : </div>
            <input></input>
          </InputWrapper>
        </div>
      </RegistForm>
    </div>
  );
}

export default HacktonRegist;

const RegistForm = styled.div`
  grid-area: main;
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  & > div:first-child {
    height: 43.625rem;
    width: 33.375rem;
    background-color: green;
    margin: 1rem;
  }
`;
