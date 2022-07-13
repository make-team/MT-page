import { useRecoilState } from "recoil";

import { loadingStatus } from "store/loading";

export const useLoading = () => {
  const [loading, setLoading] = useRecoilState(loadingStatus);

  const toggleLoading = () => setLoading(!loading);

  return [setLoading, toggleLoading] as const;
};

export default useLoading;
