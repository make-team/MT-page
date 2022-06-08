import React from "react";
import styled, { css } from "styled-components";

import { FIELD } from "constant/checkItems";
import TeamDetailContents from "components/organisms/TeamDetailContents";
import TeamRecruimentCardList from "components/organisms/TeamRecruimentCardList";

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
}

function HackathonDetail({ contents, modifyStatus, onChange }: PropTypes) {
  console.log(contents);
  return (
    <RegistForm modifyStatus={modifyStatus}>
      <TeamDetailContents
        name={contents.name}
        hackathon={contents.hackathon}
        description={contents.description}
        contact={contents.contact}
        modifyStatus={modifyStatus}
        startTime={contents.startTime}
        endTime={contents.endTime}
        onChange={onChange}
      />
      <TeamRecruimentCardList recruiment={contents.recruiment} />
    </RegistForm>
  );
}

export default HackathonDetail;

const RegistForm = styled.div<{ modifyStatus: boolean }>`
  grid-area: content;
  padding: 1.5rem;
  ${({ modifyStatus }) => css`
    pointer-events: ${modifyStatus ? "auto" : "none"};
  `}
`;
