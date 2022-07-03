import React from "react";
import { ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: () => {},
  },
} as ComponentMeta<typeof Button>;

export const Normal = ({ ...props }) => {
  const { onClick } = props;

  return <Button onClick={onClick}> 버튼 </Button>;
};
