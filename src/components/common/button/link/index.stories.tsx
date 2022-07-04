import React from "react";

import LinkButton from ".";

export default {
  title: "Button",
  component: LinkButton,
  argTypes: {
    onClick: () => {},
  },
};

export const Link = ({ ...props }) => {
  const { onClick, text } = props;

  return <LinkButton text={text} onClick={onClick} />;
};
