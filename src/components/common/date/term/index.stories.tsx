import React from "react";
import Term from ".";

export default {
  title: "DatePicker",
  component: Term,
  argTypes: {
    onClick: () => {},
  },
};

export const PickerTerm = ({ ...props }) => {
  const { startTime, endTime } = props;

  return <Term startTime={startTime} endTime={endTime} />;
};
