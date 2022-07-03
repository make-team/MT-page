import React from "react";
import Card from ".";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    onClick: () => {},
  },
};

export const Button = ({ ...props }) => {
  const { children, onClick, width, height } = props;

  return (
    <Card width={width} height={height} onClick={onClick}>
      {children}
    </Card>
  );
};
