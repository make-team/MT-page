import React from "react";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "../normal";

export interface PropTypes {
  startTime: Date;
  endTime: Date;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
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
  text-align: center;
`;
