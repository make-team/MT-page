import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { useRecoilState } from "recoil";
import { themeMode } from "store/ColorMode";

import { Theme, light, dark } from "constant/theme";
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
  const [themeStatus, setStatus] =
    useRecoilState<keyof typeof Theme>(themeMode);

  const toggleClick = useCallback(() => {
    if (themeStatus === 0) {
      localStorage.setItem("theme", "1");
      setStatus(1);
      return;
    }

    localStorage.setItem("theme", "0");
    setStatus(0);
  }, [setStatus, themeStatus]);

  useEffect(() => {
    setStatus(0);
  }, [setStatus]);

  return (
    <Wrapper status={themeStatus}>
      <Logo>
        <div>Make Team</div>
      </Logo>
      <Menu>
        {MENU.map((item) => (
          <ListLink status={themeStatus} key={item.url} to={item.url} end>
            <div key={item.url}>{item.title}</div>
          </ListLink>
        ))}
      </Menu>
      <Toggle
        status={themeStatus === 0}
        onClick={toggleClick}
        circleText={themeStatus ? "🌞" : "🌜"}
      />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div<{ status: 0 | 1 }>`
  grid-area: nav;
  display: flex;
  height: 3rem;
  align-items: center;
  color: var(--color);
  justify-content: space-between;
  padding: 0 2rem;
  ${({ status }) => css`
    background-color: ${status === 0
      ? light.mainBackground
      : dark.subBackground};
    color: ${status === 0 ? light.textColor : dark.textColor};
  `}
`;

const Logo = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  width: 20rem;
`;

const ListLink = styled(NavLink)<{ status: 0 | 1 }>`
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
  ${({ status }) => css`
    border-right: 1px solid ${status === 0 ? light.textColor : dark.textColor};
    &:visited {
      color: ${status === 0 ? light.textColor : dark.textColor};
    }
    &:link {
      color: ${status === 0 ? light.textColor : dark.textColor};
    }
    &.active {
      color: ${status === 0 ? light.selectedColor : dark.selectedColor};
    }
  `}
  &:last-child {
    border-right: none;
  }
`;
