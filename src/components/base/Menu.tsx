import React from "react";
import styled from "styled-components";

const MENU = [
  {
    title: "해커톤 목록",
  },
  {
    title: "인재 목록",
  },
];

interface PropTypes {
  activeTab: number;
  onClick: (id: number) => void;
}

function Menu({ activeTab, onClick }: PropTypes) {
  return (
    <Wrapper>
      {MENU.map((item, index) => (
        <ListItem
          active={activeTab === index ? true : false}
          key={item.title}
          onClick={() => onClick(index)}
        >
          {item.title}
        </ListItem>
      ))}
    </Wrapper>
  );
}

export default Menu;

const Wrapper = styled.div`
  grid-area: menu;
  display: flex;
  height: 4rem;
  background-color: #3c6382;
  min-width: max-content;
  align-items: center;
`;

const ListItem = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: sticky;
  top: 0;
  cursor: pointer;
  &[active="true"] {
    border-bottom: 1px solid green;
    font-size: 2rem;
  }
`;
