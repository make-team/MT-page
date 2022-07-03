import React from "react";

import DatePicker from ".";

export default {
  title: "DatePicker",
  component: DatePicker,
  argTypes: {
    onClick: () => {},
  },
};

export const Button = ({ ...props }) => {
  const { selected, minDate, pickerName, onChange } = props;

  return (
    <DatePicker
      selected={selected}
      minDate={minDate}
      pickerName={pickerName}
      onChange={onChange}
    />
  );
};
