import React from "react";
import styled from "styled-components";

interface PropTypes {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function LinkButton({ text, onClick }: PropTypes) {
  return <Link onClick={onClick}>{text}</Link>;
}

export default LinkButton;

const Link = styled.button``;
