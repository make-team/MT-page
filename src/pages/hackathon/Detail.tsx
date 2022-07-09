import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

import DetailContainer from "container/hackton/DetailContainer";

function HackathonDetail() {
  const location = useLocation();
  const history = useNavigate();

  const goBackClick = () => {
    history(`${location.pathname}/hackathon`);
  };

  const registTeam = () => {
    history(`${location.pathname}/team/regist`);
  };

  const id = location.pathname.split("/")[2];

  return (
    <Wrapper>
      <DetailContainer id={id} toRegistTeam={registTeam} toBack={goBackClick} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
  background-color: ${(props) => props.theme.subBackground};
`;
