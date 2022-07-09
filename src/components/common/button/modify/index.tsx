import React from "react";
import styled from "styled-components";

import Button from "../normal";

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
      <Button onClick={onBack}> 뒤로가기 </Button>
      <Button onClick={deleteClick} backgroundColor="#F05454">
        삭제하기
      </Button>
      <Button onClick={onTeamRegist}> 팀 만들기 </Button>
      {modifyStatus ? (
        <>
          <Button onClick={submitModiy}> 수정완료 </Button>
          <Button onClick={detailModify}> 수정취소 </Button>
        </>
      ) : (
        <Button onClick={detailModify}> 수정하기 </Button>
      )}
    </Wrapper>
  );
}

export default ModifySubmitButton;
const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem;
  & > button {
    margin: 0 1rem;
  }
`;
