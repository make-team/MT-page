import React from "react";
import styled from "styled-components";

import SubmitButton from "../button/submit";

interface PropTypes {
  open: boolean;
  content: JSX.Element;
  onClose: () => void;
  onSubmit: () => void;
}

function Modal({ open, content, onClose, onSubmit }: PropTypes) {
  return (
    <>
      {open && (
        <Wrapper>
          <Content>
            {content}
            <SubmitButton onCancel={onClose} onSubmit={onSubmit} />
          </Content>
        </Wrapper>
      )}
    </>
  );
}

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: black;
  height: fit-content;
  width: fit-content;
  padding: 2rem;
`;
