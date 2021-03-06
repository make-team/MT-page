import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

import DetailContainer from "container/hackton/DetailContainer";

function HackathonDetail() {
  const location = useLocation();
  const history = useNavigate();

  const id = location.pathname.split("/")[2];

  const goBackClick = () => {
    history(`/hackathon`);
  };

  return (
    <Wrapper>
      <DetailContainer id={id} toBack={goBackClick} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
  background-color: ${(props) => props.theme.subBackground};
`;
