import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { popupStatus } from "store/popup";

import { Div } from "../Div";
import Button from "../button/normal";

export interface PropTypes {
  text: string;
  onClick: () => void;
}

function Popup({ text, onClick }: PropTypes) {
  const status = useRecoilValue(popupStatus);

  const handleClick = () => {
    onClick();
  };

  return (
    <>
      {status && (
        <Wrapper>
          <PopupWindow>
            <Div fontSize="1.3rem">{text}</Div>
            <Button onClick={handleClick}>확인</Button>
          </PopupWindow>
        </Wrapper>
      )}
    </>
  );
}

export default Popup;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
  height: 10rem;
  width: 30rem;
  padding: 2rem;
`;
