import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ListContainer from "container/hackton/ListContainer";

function HackathonList() {
  const history = useNavigate();

  const goDetail = (id: number) => {
    history(`/hackathon/${id}`);
  };

  return (
    <Wrapper>
      <ListContainer goDetail={goDetail} />
    </Wrapper>
  );
}

export default HackathonList;

const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
    max-width: 45rem;
  }
  @media screen and (max-width: 450px) {
    width: 15rem;
  }
`;
