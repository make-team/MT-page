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
          <Contents>
            {content}
            <SubmitButton onCancel={onClose} onSubmit={onSubmit} />
          </Contents>
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Contents = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  margin: 0 auto;
`;
