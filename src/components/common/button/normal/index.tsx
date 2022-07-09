import React from "react";
import styled, { css } from "styled-components";

export interface PropTypes {
  children: string;
  onClick?: () => void;
  backgroundColor?: string;
}

function Button({ children, backgroundColor, onClick }: PropTypes) {
  return (
    <Wrapper onClick={onClick} background={backgroundColor ?? "none"}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button<{ background: string }>`
  border: none;
  padding: 0.2rem 0.3rem;
  border-radius: 15px;
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
  ${({ background }) => css`
    background-color: ${background};
    color: ${background === "none" ? "black" : "white"};
  `}
  &:hover {
    transform: scale(1.1);
    transition: 0.25s;
  }
`;
