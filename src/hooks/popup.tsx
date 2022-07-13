import { useRecoilState } from "recoil";

import { popupStatus } from "store/popup";

export const usePopup = () => {
  const [status, setStatus] = useRecoilState(popupStatus);

  const togglePopup = () => setStatus(!status);

  return [togglePopup];
};
