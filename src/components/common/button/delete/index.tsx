import React from "react";
import styled from "styled-components";

interface PropTypes {
  id: number;
  onClick: (id: number) => void;
}
function CardDeleteButton({ id, onClick }: PropTypes) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <DeleteButton onClick={handleClick}>
      <button onClick={() => onClick(id)}>❌</button>
    </DeleteButton>
  );
}

export default CardDeleteButton;

const DeleteButton = styled.div`
  & > button {
    border: none;
    cursor: pointer;
    background-color: inherit;
  }
`;
