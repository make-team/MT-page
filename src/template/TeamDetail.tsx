import React from "react";
import styled, { css } from "styled-components";

import { FIELD } from "constant/checkItems";
import SubmitButton from "components/molecules/SubmitButton";
import TeamDetailContents from "components/organisms/TeamDetailContents";
import TeamRecruimentCardList from "components/organisms/TeamRecruimentCardList";
import StartEndPicker from "components/molecules/form/StartEndPicker";

export interface Team {
  id: number;
  hackathon: {
    id: number;
    title: string;
  }[];
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

export interface PropTypes {
  contents: Team;
  modifyStatus: boolean;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  onBack: () => void;
}

function HackathonDetail({
  contents,
  modifyStatus,
  onChange,
  onBack,
}: PropTypes) {
  return (
    <RegistForm modifyStatus={modifyStatus}>
      <TeamDetailContents
        name={contents.name}
        hackathon={contents.hackathon}
        description={contents.description}
        contact={contents.contact}
        onChange={onChange}
      />
      <StartEndPicker
        startTime={contents.startTime}
        endTime={contents.endTime}
        onChange={onChange}
      />
      <TeamRecruimentCardList recruiment={contents.recruiment} />
      <ButtonWrapper>
        <SubmitButton onCancel={onBack} />
      </ButtonWrapper>
    </RegistForm>
  );
}

export default HackathonDetail;

const RegistForm = styled.div<{ modifyStatus: boolean }>`
  ${({ modifyStatus }) => css`
    grid-area: content;
    padding: 1.5rem;
    pointer-events: ${modifyStatus ? "none" : "auto"};
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
