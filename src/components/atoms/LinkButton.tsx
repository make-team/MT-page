import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  text: string;
  goUrl: string;
}

function LinkButton({ text, goUrl }: PropTypes) {
  const history = useNavigate();
  return <Link onClick={() => history(`${goUrl}`)}>{text}</Link>;
}

export default LinkButton;

const Link = styled.button``;
