import React from "react";
import styled from "styled-components";

import { Div } from "../Div";

export interface PropTypes {
  contentTitle?: string;
  content: string | JSX.Element;
}

function CardItem({ contentTitle, content }: PropTypes) {
  return (
    <Wrapper>
      {contentTitle && <Div flex="1">{contentTitle}</Div>}
      <Div flex="2">{content}</Div>
    </Wrapper>
  );
}

export default CardItem;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  & > div {
    font-size: 0.7rem;
  }
`;
