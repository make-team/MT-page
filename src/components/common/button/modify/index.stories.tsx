import React from "react";
import { ComponentMeta } from "@storybook/react";

import ModifyButton from ".";

export default {
  title: "Button",
  component: ModifyButton,
  argTypes: {
    onClick: () => {},
  },
} as ComponentMeta<typeof ModifyButton>;

export const Modify = ({ ...props }) => {
  const {
    modifyStatus,
    onBack,
    onDelete,
    onModify,
    onSubmitModify,
    onTeamRegist,
  } = props;

  return (
    <ModifyButton
      modifyStatus={modifyStatus}
      onBack={onBack}
      onDelete={onDelete}
      onModify={onModify}
      onSubmitModify={onSubmitModify}
      onTeamRegist={onTeamRegist}
    />
  );
};
