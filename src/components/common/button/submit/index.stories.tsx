import React from "react";
import { ComponentMeta } from "@storybook/react";

import SubmitButton from "./index";

export default {
  title: "Button",
  component: SubmitButton,
  argTypes: {
    onClick: () => {},
  },
} as ComponentMeta<typeof SubmitButton>;

export const Submit = ({ ...props }) => {
  const { onCancel, onSubmit, onModify } = props;

  return (
    <SubmitButton onCancel={onCancel} onSubmit={onSubmit} onModify={onModify} />
  );
};
