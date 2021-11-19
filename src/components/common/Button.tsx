import React from "react";
import styled from "styled-components";

export interface PropTypes {
  children: string;
  onClick?: () => void;
}

function Button({ children, onClick }: PropTypes) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default Button;

const Wrapper = styled.button`
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.9, 0.24, 0.4, 1);
  color: red;
  &:hover {
    box-shadow: inset 00px 100px 0px 0px #6098ff;
    color: #ffffff;
  }
  &:hover::before {
    opacity: 1;
    height: 100%;
  }
`;
