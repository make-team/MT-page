import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import DatePicker from "../../atoms/DatePicker";

export interface PropTypes {
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  startTime: Date;
  endTime: Date;
}

function StartEndPicker({ startTime, endTime, onChange }: PropTypes) {
  return (
    <Wrapper>
      <DatePicker
        pickerName="startTime"
        selected={startTime}
        minDate={new Date()}
        onChange={onChange}
      />
      ~
      <DatePicker
        pickerName="endTime"
        selected={endTime}
        minDate={startTime}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default StartEndPicker;

const Wrapper = styled.div`
  display: flex;
`;
