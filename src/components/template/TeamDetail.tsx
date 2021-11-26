import React from "react";
import styled, { css } from "styled-components";

import DatePicker from "components/UI/molecules/form/StartEndPicker";
import { Input } from "components/UI/atoms/Input";

import { FIELD } from "../../constant/checkItems";

export interface Team {
  id: number;
  hackathonId: number;
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

export interface PropTypes {
  contents: Team;
  modifyStatus?: boolean;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ contents, modifyStatus, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <RegistForm modifyStatus={false}>
      <div>
        <h1>팀원 모집</h1>
        <InputWrapper>
          <div>팀명 : </div>
          <Input
            name="name"
            value={contents.name}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
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
        <div>- 모집 팀원 -</div>
        {contents.recruiment && (
          <RecruimentCard>
            {contents.recruiment.map((item) => {
              return (
                <CardContents>
                  <div>모집 분야 : {FIELD[item.field]}</div>
                  <div>요구 스킬 : {item.skill}</div>
                  <div>모집 인원 : {item.count}</div>
                </CardContents>
              );
            })}
          </RecruimentCard>
        )}
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

const RegistForm = styled.div<{ modifyStatus: boolean }>`
  ${({ modifyStatus }) => css`
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${modifyStatus ? "auto" : "none"};
  `}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
const RecruimentCard = styled.div`
  display: flex;
  text-align: left;
`;

const CardContents = styled.div`
  margin: 0.5rem;
  background-color: #c3a6a0;
  border: 1px solid #262220;
  padding: 1rem;
`;
