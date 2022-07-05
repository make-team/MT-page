import React, { useCallback } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useRecoilState } from "recoil";
import { Theme, palette } from "constant/theme";
import { themeMode } from "store/ColorMode";

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
  const [theme, setTheme] = useRecoilState<keyof typeof Theme>(themeMode);

  const handleChangeTheme = useCallback(() => {
    if (theme === 0) {
      localStorage.setItem("theme", "1");
      setTheme(1);
      return;
    }

    localStorage.setItem("theme", "0");
    setTheme(0);
  }, [setTheme, theme]);

  return (
    <Wrapper>
      <Logo>
        <div>Make Team</div>
        <div onClick={handleChangeTheme}>{theme === 0 ? "🌜" : "🌞"}</div>
      </Logo>
      <Menu>
        {MENU.map((item) => (
          <ListLink key={item.url} to={item.url} end>
            <div key={item.url}>{item.title}</div>
          </ListLink>
        ))}
      </Menu>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  height: 3rem;
  align-items: center;
  color: var(--color);
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${({ theme }) =>
    theme === 0 ? palette.background : palette.darkBackground};
  color: ${({ theme }) =>
    theme === 0 ? palette.textColor : palette.darkTextColor};
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
  font-weight: bolder;
  font-size: 0.75rem;
  text-decoration: none;
  border-right: 1px solid
    ${({ theme }) => (theme === 0 ? palette.textColor : palette.darkTextColor)};
  &:visited {
    color: ${({ theme }) =>
      theme === 0 ? palette.textColor : palette.darkTextColor};
  }
  &:link {
    color: ${({ theme }) =>
      theme === 0 ? palette.textColor : palette.darkTextColor};
  }
  &.active {
    color: ${({ theme }) =>
      theme === 0 ? palette.selectedColor : palette.darkSelectedColor};
  }
  &:last-child {
    border-right: none;
  }
`;
