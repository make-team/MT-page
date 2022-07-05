import React from "react";
import styled, { css } from "styled-components";

export interface PropTypes {
  children: JSX.Element;
  width?: string;
  height?: string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Card({ children, onClick, width, height, margin }: PropTypes) {
  return (
    <Wrapper width={width} height={height} margin={margin} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  ${({ width, height, margin }) => css`
    cursor: pointer;
    width: ${width ?? "20rem"};
    height: ${height ?? "20rem"};
    margin: ${margin ?? "none"};
    margin-bottom: 1rem;
    border: 1px solid black;
  `}
  &:hover {
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
