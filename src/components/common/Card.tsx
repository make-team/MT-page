import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export interface PropTypes {
  children: JSX.Element;
  toUrl?: string;
  width?: string;
  height?: string;
}

function Card({ children, toUrl, width, height }: PropTypes) {
  const history = useHistory();
  return (
    <Wrapper
      width={width}
      height={height}
      onClick={() => history.push(`${toUrl}`)}
    >
      {children}
    </Wrapper>
  );
}

export default Card;

const background = keyframes`
      0% {background-color: #39f;}
     15% {background-color: #8bc5d1;}
     30% {background-color: #f8cb4a;}
     45% {background-color: #95b850;}
     60% {background-color: #944893;}
     75% {background-color: #c71f00;}
     90% {background-color: #bdb280;}
    100% {background-color: #39f;}
`;

const Wrapper = styled.div<{ width?: string; height?: string }>`
  ${({ width, height }) => css`
    width: ${width ?? "15rem"};
    height: ${height ?? "25rem"};
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #636e72;
    color: white;
    padding: 2rem;
    &:hover {
      animation-name: ${background};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `}
`;
