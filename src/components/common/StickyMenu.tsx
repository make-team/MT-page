import React from "react";
import styled from "styled-components";

interface PropTypes {
  onBack: () => void;
}

function StickyMenu({ onBack }: PropTypes) {
  return (
    <Menu>
      <div onClick={onBack}> 뒤로가기 </div>
      <div> 해커톤 목록 </div>
      <div> 팀 목록 </div>
      <div> 인재 목록 </div>
    </Menu>
  );
}

export default StickyMenu;
const Menu = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 15rem;
  right: 3rem;
  background-color: blueviolet;
  height: max-content;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 4rem;
    width: 8rem;
  }
`;
