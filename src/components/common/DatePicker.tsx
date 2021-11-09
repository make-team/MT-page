import React, { useState } from "react";
import Picker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

function DatePicker() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const changeStartDate = (date: Date) => {
    setStartDate(date);
  };

  const changeEndDate = (date: Date) => {
    setEndDate(date);
  };

  return (
    <Wrapper>
      <Picker
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        locale={ko}
        onChange={changeStartDate}
      />
      ~
      <Picker
        dateFormat="yyyy년 MM월 dd일"
        selected={endDate}
        locale={ko}
        minDate={startDate}
        onChange={changeEndDate}
      />
    </Wrapper>
  );
}

export default DatePicker;

const Wrapper = styled.div`
  display: flex;
`;
