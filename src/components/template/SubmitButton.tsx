import React from "react";
import styled from "styled-components";

export interface PropTypes {
  onCancel: () => void;
  onSubmit: () => void;
}

function SubmitButton({ onCancel, onSubmit }: PropTypes) {
  return (
    <Wrapper>
      <button onClick={onCancel}>취소</button>
      <button onClick={onSubmit}>확인</button>
    </Wrapper>
  );
}

export default SubmitButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  & > button {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;
