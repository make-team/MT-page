import React from "react";
import styled from "styled-components";

import ListContainer from "container/person/ListContainer";

function PersonList() {
  return (
    <Wrapper>
      <ListContainer />
    </Wrapper>
  );
}

export default PersonList;

const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
    max-width: 45rem;
  }
  @media screen and (max-width: 450px) {
    width: 15rem;
  }
`;
