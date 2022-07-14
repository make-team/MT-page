import { usePopup } from "hooks/popup";
import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { managerPassword } from "store/managerPassword";
import styled from "styled-components";

import SubmitButton from "../button/submit";
import { Input } from "../input";
import Popup from "../popup";

interface PropTypes {
  open: boolean;
  text: string;
  onClose: () => void;
  onSubmit: () => void;
}

function InputModal({ open, text, onClose, onSubmit }: PropTypes) {
  const [inputValue, setInputValue] = useState<string>("");
  const password = useRecoilValue(managerPassword);

  const [togglePopup] = usePopup();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  }, []);

  const handlePopup = () => {
    togglePopup();
  };

  const handleSubmitClick = () => {
    if (inputValue === password) {
      localStorage.setItem("manager", `${inputValue}`);
      setInputValue("");
      onSubmit();
    } else {
      handlePopup();
    }
  };

  return (
    <>
      {open && (
        <Wrapper>
          <Content>
            {text}
            <Input onChange={onChange} />
            <SubmitButton onCancel={onClose} onSubmit={handleSubmitClick} />
          </Content>
          <Popup text="틀린 입력" onClick={handlePopup} />
        </Wrapper>
      )}
    </>
  );
}

export default InputModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
  height: fit-content;
  width: fit-content;
  padding: 2rem;
`;
