import { atom } from "recoil";

export const loadingStatus = atom<boolean>({
  key: "Loading",
  default: false,
});
