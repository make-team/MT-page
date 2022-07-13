import { atom } from "recoil";

export const popupStatus = atom<boolean>({
  key: "Popup",
  default: false,
});
