import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export interface PropTypes {
  children: JSX.Element;
}

function Card({ children }: PropTypes) {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push("/Hackathon/Detail")}>
      {children}
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  flex: 0 0 15rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #636e72;
  color: white;
  padding: 2rem;
  height: 15rem;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
