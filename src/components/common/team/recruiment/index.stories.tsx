import React from "react";
import Recruiment from ".";

export default {
  title: "DatePicker",
  component: Recruiment,
  argTypes: {
    onClick: () => {},
  },
};

export const PickerTerm = ({ ...props }) => {
  const { field, skill, count } = props;

  return <Recruiment field={field} skill={skill} count={count} />;
};
