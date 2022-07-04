import React from "react";
import styled from "styled-components";

export interface PropTypes {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckButton({ name, value, onChange }: PropTypes) {
  return (
    <CheckInput type="checkbox" name={name} value={value} onChange={onChange} />
  );
}

export default CheckButton;

const CheckInput = styled.input``;
