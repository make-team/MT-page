import { atom } from "recoil";

export interface ImgType {
  hackathonId?: number;
  attachment?: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
}

export const ImgState = atom<ImgType>({
  key: "imgs",
  default: { hackathonId: 0, attachment: [] },
});
