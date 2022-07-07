import { atom } from "recoil";
import { Theme } from "constant/theme";

export const getTheme = (): keyof typeof Theme => {
  const theme: number = Number(localStorage.getItem("theme"));

  if (theme === 0) {
    return 0;
  }

  return 1;
};

export const themeStatus = atom<keyof typeof Theme>({
  key: "themeStatus",
  default: getTheme(),
});
