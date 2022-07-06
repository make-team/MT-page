import styled, { css } from "styled-components";

interface PropsTypes {
  status: boolean;
  onClick: () => void;
  circleText?: string;
}

function Toggle({ status, circleText, onClick }: PropsTypes) {
  return (
    <Wrapper status={status} onClick={onClick}>
      <Circle status={status}>{circleText}</Circle>
    </Wrapper>
  );
}

export default Toggle;

const Wrapper = styled.div<{ status: boolean }>`
  position: relative;
  height: 1.5rem;
  width: 3rem;
  border-radius: 8rem;
  border: 1px solid black;
  cursor: pointer;
  ${({ status }) => css`
    background-color: ${status ? "black" : "white"};
  `}
  transition: all 0.2s ease-in-out;
`;

const Circle = styled.div<{ status: boolean }>`
  position: absolute;
  text-align: center;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: gray;
  ${({ status }) => css`
    right: ${status ? 100 : 0};
  `}
`;
