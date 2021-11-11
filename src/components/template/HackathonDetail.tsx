import React from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import { Input } from "../common/Input";

export interface Hackathon {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  hit: number;
}

export interface PropTypes {
  contents: Hackathon;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ contents, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <RegistForm>
      <ImgWrapper>
        <div>img</div>
      </ImgWrapper>
      <div>
        <InputWrapper>
          <div>모집 기간 : </div>
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

export default HackathonDetail;

const RegistForm = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  height: 50vh;
  width: 40vh;
  background-color: green;
  margin: 1rem;
`;
