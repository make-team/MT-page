import { atom } from "recoil";

export const modalState = atom<boolean>({
  key: "ModalState",
  default: false,
});
