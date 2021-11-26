import React from "react";
import styled from "styled-components";
import { Div } from "../atoms/Div";

interface PropTypes {
  onBack: () => void;
  onDelete: () => void;
  onModify: () => void;
  onSubmitModify: () => void;
  modifyStatus: boolean;
}

function StickyMenu({
  modifyStatus,
  onBack,
  onDelete,
  onModify,
  onSubmitModify,
}: PropTypes) {
  const deleteClick = () => {
    onDelete();
    onBack();
  };

  const detailModify = () => {
    onModify();
  };

  const submitModiy = () => {
    onSubmitModify();
    onModify();
  };
  return (
    <Menu>
      <Div onClick={onBack}> 뒤로가기 </Div>
      <Div onClick={deleteClick}> 삭제하기 </Div>
      {modifyStatus ? (
        <>
          <Div onClick={submitModiy}> 수정완료 </Div>
          <Div onClick={detailModify}> 수정취소 </Div>
        </>
      ) : (
        <Div onClick={detailModify}> 수정하기 </Div>
      )}
    </Menu>
  );
}

export default StickyMenu;
const Menu = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 15rem;
  right: 3rem;
  height: max-content;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: coral;
    border: 1px solid black;
    cursor: pointer;
    height: 4rem;
    width: 8rem;
    margin-bottom: 2rem;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
