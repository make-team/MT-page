import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { themeStatus } from "store/theme";

import { Theme } from "constant/theme";
import Toggle from "../toggle";

const MENU = [
  {
    title: "공모전 목록",
    url: "/hackathon",
  },
  {
    title: "팀 목록",
    url: "/team",
  },
  {
    title: "인재 목록",
    url: "/person",
  },
];

function Header() {
  const [theme, setTheme] = useRecoilState<keyof typeof Theme>(themeStatus);

  const toggleClick = useCallback(() => {
    if (theme) {
      localStorage.setItem("theme", "0");
      setTheme(0);
      return;
    }

    localStorage.setItem("theme", "1");
    setTheme(1);
  }, [theme, setTheme]);

  return (
    <Wrapper>
      <Logo>
        <div>Make Team</div>
      </Logo>
      <Menu>
        {MENU.map((item) => (
          <ListLink key={item.url} to={item.url} end>
            <div key={item.url}>{item.title}</div>
          </ListLink>
        ))}
      </Menu>
      <Toggle
        status={theme === 0}
        onClick={toggleClick}
        circleText={theme ? "🌜" : "🌞"}
      />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
`;

const Logo = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  width: 20rem;
`;

const ListLink = styled(NavLink)`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 0.75rem;
  text-decoration: none;
  border-right: 1px solid ${(props) => props.theme.textColor};
  &:visited {
    color: ${(props) => props.theme.textColor};
  }
  &:link {
    color: ${(props) => props.theme.textColor};
  }
  &.active {
    color: ${(props) => props.theme.selectedColor};
  }
  &:last-child {
    border-right: none;
  }
`;
