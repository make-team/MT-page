import React from "react";

import CardItem from ".";

export default {
  title: "Card",
  component: CardItem,
  argTypes: {
    contentTitle: "타이틀",
    content: <div>내용</div>,
  },
};

export const ItemWrapper = ({ ...props }) => {
  const { contentTitle, content } = props;

  return <CardItem contentTitle={contentTitle} content={content} />;
};
