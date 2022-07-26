import React from "react";
import styled from "styled-components";

interface PropTypes {
  id: number;
  onClick: (id: number) => void;
}
function DeleteButton({ id, onClick }: PropTypes) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleClick}>
      <button onClick={() => onClick(id)}>❌</button>
    </Wrapper>
  );
}

export default DeleteButton;

const Wrapper = styled.div`
  & > button {
    border: none;
    cursor: pointer;
    background-color: inherit;
  }
`;
