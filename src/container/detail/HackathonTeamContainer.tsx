import React from "react";
import styled from "styled-components";

import TeamCard from "../../components/template/TeamCard";

function HackathonTeamContainer() {
  return (
    <Wrapper>
      <TeamCard items={[]} add={true} />
    </Wrapper>
  );
}

export default HackathonTeamContainer;

const Wrapper = styled.div`
  grid-area: list;
`;
