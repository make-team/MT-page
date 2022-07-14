import { useRecoilValue } from "recoil";
import { managerPassword } from "store/managerPassword";

export const useCheckManger = (password: string) => {
  const status = useRecoilValue(managerPassword);
  if (password === status) return 1;
  return 0;
};
