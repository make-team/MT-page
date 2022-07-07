import React from "react";
import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <Item></Item>
      <Item></Item>
    </Wrapper>
  );
}

export default Loading;

const LoadingAni = keyframes`
  0% {
    top: 15rem;
    left: 15rem;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 30rem;
    height: 30rem;
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border: none;
  width: 30rem;
  height: 20rem;
  margin: 0 auto;
`;

const Item = styled.button`
  position: absolute;
  border: 4px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.mainBackground};
  opacity: 1;
  border-radius: 50%;
  animation: ${LoadingAni} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  & > :last-child {
    animation-delay: -0.5s;
  }
`;
