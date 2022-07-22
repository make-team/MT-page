import styled from "styled-components";

interface PropTypes {
  open: boolean;
  content: JSX.Element;
}

function Modal({ open, content }: PropTypes) {
  return (
    <>
      {open && (
        <Wrapper>
          <Contents>{content}</Contents>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Contents = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
`;
