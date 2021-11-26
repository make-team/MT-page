import React from "react";

import { Div } from "../atoms/Div";

export interface PropTypes {
  contentTitle: string;
  content: string | JSX.Element;
}

function CardItem({ contentTitle, content }: PropTypes) {
  return (
    <Div display="flex">
      <Div width="7rem">{contentTitle}</Div>
      <Div>{content}</Div>
    </Div>
  );
}

export default CardItem;
