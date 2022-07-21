import React from "react";
import styled from "styled-components";
import Button from "../normal";

export interface PropTypes {
  onCancel?: () => void;
  onSubmit?: () => void;
  onModify?: () => void;
}

function SubmitButton({ onCancel, onSubmit, onModify }: PropTypes) {
  return (
    <Wrapper>
      <Button onClick={onCancel}> 취소 </Button>
      {onModify ? (
        <Button onClick={onModify}> 수정 </Button>
      ) : (
        <Button onClick={onSubmit}> 확인 </Button>
      )}
    </Wrapper>
  );
}

export default SubmitButton;

const Wrapper = styled.div`
  display: flex;
  & > button {
    width: 8rem;
    height: 3rem;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
      background-color: lightblue;
    }
    @media (max-width: 700px) {
      height: 1.5rem;
      font-size: 1rem;
    }
  }
`;
