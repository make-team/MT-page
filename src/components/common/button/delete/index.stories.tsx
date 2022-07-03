import React from "react";
import { ComponentMeta } from "@storybook/react";

import DeleteButton from ".";

export default {
  title: "Button",
  component: DeleteButton,
  argTypes: {
    onClick: () => {},
  },
} as ComponentMeta<typeof DeleteButton>;

export const Delete = ({ ...props }) => {
  const { onClick, id } = props;

  return <DeleteButton id={id} onClick={onClick} />;
};
