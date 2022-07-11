import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

import DetailContainer from "container/team/DetailContainer";

function TeamDetail() {
  const location = useLocation();
  const history = useNavigate();

  const goBackClick = () => {
    history(`/team`);
  };

  const goHackathon = (id: number) => {
    history(`/hackathon/${id}`);
  };

  const id = location.pathname.split("/")[2];

  return (
    <Wrapper>
      <DetailContainer id={id} toBack={goBackClick} goHackathon={goHackathon} />
    </Wrapper>
  );
}

export default TeamDetail;

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
  background-color: ${(props) => props.theme.subBackground};
`;
