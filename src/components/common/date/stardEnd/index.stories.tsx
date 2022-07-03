import React from "react";
import StartEndPicker from ".";

export default {
  title: "DatePicker",
  component: StartEndPicker,
  argTypes: {
    onClick: () => {},
  },
};

export const Button = ({ ...props }) => {
  const { startTime, endTime, onChange } = props;

  return (
    <StartEndPicker
      startTime={startTime}
      endTime={endTime}
      onChange={onChange}
    />
  );
};
