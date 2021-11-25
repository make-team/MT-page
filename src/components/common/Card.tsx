import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

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

const Wrapper = styled.div<{ width?: string; height?: string }>`
  ${({ width, height }) => css`
    cursor: pointer;
    width: ${width ?? "15rem"};
    height: ${height ?? "25rem"};
    padding: 0.5rem;
    margin-bottom: 1rem;
    background-color: #c3a6a0;
    border-radius: 8px;
  `}
`;
