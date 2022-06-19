import React, { useCallback } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Theme } from "constant/theme";
import { themeMode } from "store/ColorMode";

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
      <div>Make Team</div>
      <div onClick={handleChangeTheme}>{theme === 0 ? "🌜" : "🌞"}</div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  height: 5rem;
  align-items: center;
  color: var(--color);
  justify-content: center;
  & > div {
    font-size: 4rem;
  }
`;
