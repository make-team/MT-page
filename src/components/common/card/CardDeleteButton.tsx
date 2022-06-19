import React from "react";
import styled from "styled-components";

interface PropTypes {
  id: number;
  onDelete: (id: number) => void;
}
function CardDeleteButton({ id, onDelete }: PropTypes) {
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <DeleteButton onClick={onClick}>
      <button onClick={() => onDelete(id)}>❌</button>
    </DeleteButton>
  );
}

export default CardDeleteButton;

const DeleteButton = styled.div`
  position: absolute;
  right: 0;
  & > button {
    border: none;
    cursor: pointer;
    background-color: #c3a6a0;
  }
`;
