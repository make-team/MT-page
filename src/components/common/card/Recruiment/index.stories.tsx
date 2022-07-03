import React from "react";

import RecruimentCard from ".";

export default {
  title: "Card",
  component: RecruimentCard,
  argTypes: {
    onClick: () => {},
  },
};

export const Button = ({ ...props }) => {
  const { items } = props;

  return <RecruimentCard items={items} />;
};
