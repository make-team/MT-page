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
  max-width: 90rem;
  margin: 0 auto;
`;
