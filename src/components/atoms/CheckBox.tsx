import React from "react";
import styled from "styled-components";

export interface PropTypes {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * title = 해당 주제
 * name = 속성
 * @param name:string
 * @param value:string
 * @param onChange:function
 */
function CheckButton({ name, value, onChange }: PropTypes) {
  return (
    <CheckInput type="checkbox" name={name} value={value} onChange={onChange} />
  );
}

export default CheckButton;

const CheckInput = styled.input``;
