import { atom } from "recoil";

const MANAGER = process.env.REACT_APP_MANAGER_PASSWORD;

export const managerPassword = atom({
  key: "managerPassword",
  default: MANAGER,
});
