import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

export interface PropTypes {
  onCancel?: () => void;
  onSubmit?: () => void;
  onModify?: () => void;
}

function SubmitButton({ onCancel, onSubmit }: PropTypes) {
  return (
    <Wrapper>
      <Button onClick={onCancel}> 취소 </Button>
      <Button onClick={onSubmit}> 확인 </Button>
    </Wrapper>
  );
}

export default SubmitButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  & > button {
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    margin-right: 1rem;
    background-color: lightcoral;
    &:last-child {
      margin-right: 0;
      background-color: lightblue;
    }
  }
`;
