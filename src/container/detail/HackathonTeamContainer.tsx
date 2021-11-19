import React from "react";
import styled from "styled-components";

import TeamCard from "../../components/template/TeamCard";

interface PropTypes {
  toUrl: string;
}

function HackathonTeamContainer({ toUrl }: PropTypes) {
  return (
    <Wrapper>
      <TeamCard items={[]} add={true} toUrl={toUrl} />
    </Wrapper>
  );
}

export default HackathonTeamContainer;

const Wrapper = styled.div`
  grid-area: list;
`;
