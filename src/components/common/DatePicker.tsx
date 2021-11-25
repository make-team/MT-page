import React from "react";
import Picker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export interface PropTypes {
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  startTime: Date;
  endTime: Date;
}

function DatePicker({ startTime, endTime, onChange }: PropTypes) {
  const changeStartDate = (date: Date, name: string) => {
    onChange({ name: name, value: date });
  };

  const changeEndDate = (date: Date, name: string) => {
    onChange({ name: name, value: date });
  };

  return (
    <Wrapper>
      <Picker
        dateFormat="yyyy년 MM월 dd일"
        selected={startTime}
        locale={ko}
        minDate={new Date()}
        onChange={(date) => changeStartDate(date as Date, "startTime")}
      />
      ~
      <Picker
        dateFormat="yyyy년 MM월 dd일"
        selected={endTime}
        locale={ko}
        minDate={startTime}
        onChange={(date) => changeEndDate(date as Date, "endTime")}
      />
    </Wrapper>
  );
}

export default DatePicker;

const Wrapper = styled.div`
  display: flex;
`;
