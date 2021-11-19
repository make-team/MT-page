import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import TeamContainer from "../container/detail/TeamContainer";

function PersonDetail() {
  const location = useLocation();
  const history = useHistory();
  let id = location.pathname.split("/");

  const goBackClick = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <Title></Title>
      <Contents>
        <TeamContainer id={id[2]} onBack={goBackClick} />
      </Contents>
    </Wrapper>
  );
}

export default PersonDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 3rem auto 25px;
  grid-template-areas:
    " . title ."
    " . content ."
    " . . . ";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;

const Contents = styled.div`
  grid-area: content;
  padding: 1.5rem;
  & > img {
    height: 100%;
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

const Title = styled.div`
  display: flex;
  grid-area: title;
  align-items: center;
  justify-content: center;
`;
