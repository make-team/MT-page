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
  max-width: 90rem;
  background-color: inherit;
  @media screen and (max-width: 700px) {
    width: 40rem;
  }
  @media screen and (max-width: 450px) {
    width: 20rem;
  }
`;
