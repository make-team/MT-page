import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import ImgUpload from "../common/ImgUpload";
import { Input } from "../common/Input";

export interface HackathonRegist {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
}

export interface PropTypes {
  contents: HackathonRegist;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HacktonRegist({ contents, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
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
          <Input
            name="title"
            value={contents.title}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>기간 : </div>
          <DatePicker
            onChange={onChange}
            endTime={contents.endTime}
            startTime={contents.startTime}
          />
        </InputWrapper>
        <InputWrapper>
          <div>설명 : </div>
          <Input
            name="description"
            value={contents.description}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>연락처 : </div>
          <Input
            name="contact"
            value={contents.contact}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
      </div>
    </RegistForm>
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
    height: 50vh;
    width: 40vh;
    background-color: green;
    margin: 1rem;
  }
`;
