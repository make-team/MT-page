import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import HackathonContainer from "components/container/detail/HackathonContainer";
import HackathonTeamContainer from "components/container/list/HackathonTeamContainer";

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
      <HackathonTeamContainer id={+id[2]} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div``;
