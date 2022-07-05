import { atom, selector } from "recoil";

import { list } from "api/hackathon";

interface Hackathon {
  id: number;
  title: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  hit: number;
  attachment: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
}

export const boardListSelector = selector({
  key: "boardListSelector",
  get: async () => {
    const { data } = await list();
    return data.map((item) => ({
      id: item._id,
      title: item.title,
      description: item.description,
      contact: item.contact,
      hit: item.hit,
      attachment: item.attachment.map((imgItem) => ({
        imgUrl: imgItem.s3,
        uuid: imgItem.uuid,
        name: imgItem.name,
        size: imgItem.size,
        contentType: imgItem.content_type,
      })),
      endTime: new Date(item.end_time),
      startTime: new Date(item.start_time),
    }));
  },
});

export const boardListState = atom<Array<Hackathon>>({
  key: "item",
  default: [
    {
      id: 0,
      title: "",
      description: "",
      attachment: [],
      contact: "",
      hit: 1,
      startTime: new Date(),
      endTime: new Date(),
    },
  ],
});
