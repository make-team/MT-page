import { useSetRecoilState } from "recoil";

import { popupStatus } from "store/popup";

export const usePopup = () => {
  const setStatus = useSetRecoilState(popupStatus);

  const togglePopup = () => setStatus((prev) => !prev);

  return [togglePopup];
};
