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
  min-width: 20rem;
`;
