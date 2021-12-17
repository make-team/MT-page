import React from "react";
import styled from "styled-components";
import { Div } from "../atoms/Div";

interface PropTypes {
  onBack: () => void;
  onDelete: () => void;
  onModify: () => void;
  onSubmitModify: () => void;
  onTeamRegist?: () => void;
  modifyStatus: boolean;
}

function ModifySubmitButton({
  modifyStatus,
  onBack,
  onDelete,
  onModify,
  onSubmitModify,
  onTeamRegist,
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
  };
  return (
    <Wrapper>
      <Div onClick={onBack}> 뒤로가기 </Div>
      <Div onClick={deleteClick}> 삭제하기 </Div>
      <Div onClick={onTeamRegist}> 팀 만들기 </Div>
      {modifyStatus ? (
        <>
          <Div onClick={submitModiy}> 수정완료 </Div>
          <Div onClick={detailModify}> 수정취소 </Div>
        </>
      ) : (
        <Div onClick={detailModify}> 수정하기 </Div>
      )}
    </Wrapper>
  );
}

export default ModifySubmitButton;
const Wrapper = styled.div`
  grid-area: submitbutton;
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    background-color: inherit;
    padding: 0.5rem;
    margin: 0.2rem;
    width: fit-content;
    height: 1rem;
    border: 1px solid var(--color);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
