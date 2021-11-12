import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import HackathonContainer from "../container/detail/HackathonContainer";
import HackathonTeamContainer from "../container/detail/HackathonTeamContainer";

function HackathonDetail() {
  const location = useLocation();
  const history = useHistory();
  let id = location.pathname.split("/");

  const goBackClick = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <HackathonContainer id={id[2]} onBack={goBackClick} />
      <HackathonTeamContainer toUrl={" "} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 3rem auto auto;
  grid-template-areas:
    " . title ."
    " side content ."
    " . list . ";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;
