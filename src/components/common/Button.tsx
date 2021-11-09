import React from "react";
import styled from "styled-components";

export interface PropTypes {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: PropTypes) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default Button;

const Wrapper = styled.button``;
