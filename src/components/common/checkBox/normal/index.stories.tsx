import React from "react";

import CheckButton from ".";

export default {
  title: "CheckBox",
  component: CheckButton,
  argTypes: {
    onClick: () => {},
  },
};

export const Submit = ({ ...props }) => {
  const { name, value, onChange } = props;

  return <CheckButton name={name} value={value} onChange={onChange} />;
};
