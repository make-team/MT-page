import React from "react";
import styled, { css } from "styled-components";

export interface PropTypes {
  children: JSX.Element;
  width?: string;
  height?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Card({ children, onClick, width, height }: PropTypes) {
  return (
    <Wrapper width={width} height={height} onClick={onClick}>
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
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
