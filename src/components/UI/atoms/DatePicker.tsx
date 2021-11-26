import React from "react";
import Picker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

export interface PropTypes {
  pickerName: string;
  selected: Date;
  minDate: Date;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function DatePicker({ selected, minDate, pickerName, onChange }: PropTypes) {
  const changeDate = (date: Date, name: string) => {
    onChange({ name: name, value: date });
  };

  return (
    <Picker
      dateFormat="yyyy년 MM월 dd일"
      locale={ko}
      selected={selected}
      minDate={minDate}
      onChange={(date) => changeDate(date as Date, `${pickerName}`)}
    />
  );
}

export default DatePicker;
