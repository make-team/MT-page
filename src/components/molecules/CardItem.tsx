import React from "react";
import styled from "styled-components";

import { Div } from "../atoms/Div";

export interface PropTypes {
  contentTitle: string;
  content: string | JSX.Element;
}

function CardItem({ contentTitle, content }: PropTypes) {
  return (
    <Wrapper>
      <Div flex="1.2">{contentTitle}</Div>
      <Div flex="3.5">{content}</Div>
    </Wrapper>
  );
}

export default CardItem;

const Wrapper = styled.div`
  display: flex;
  height: 1rem;
  & > div {
    font-size: 0.7rem;
  }
`;
