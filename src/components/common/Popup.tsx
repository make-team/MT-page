import React from "react";
import styled from "styled-components";
import { Div } from "./Div";
import SubmitButton from "./button/submit";

export interface PropTypes {
  text: string;
  status: "open" | "close";
  onSubmit?: () => void;
  onCancel?: () => void;
}

function Popup({ text, status = "close", onSubmit, onCancel }: PropTypes) {
  return (
    <Wrapper data-open={status === "open"}>
      <PopupWindow>
        <Div fontSize="1.3rem">{text}</Div>
        <SubmitButton onSubmit={onSubmit} onCancel={onCancel} />
      </PopupWindow>
    </Wrapper>
  );
}

export default Popup;

const Wrapper = styled.div<{ "data-open": boolean }>`
  &[data-open="false"] {
    display: none;
  }
  &[data-open="true"] {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const PopupWindow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  height: 10rem;
  width: 30rem;
  padding: 2rem;
`;
