import React from "react";
import styled from "styled-components";

function SubmitButton() {
  return (
    <Wrapper>
      <button>취소</button>
      <button>확인</button>
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
