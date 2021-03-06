import { selector } from "recoil";

import { list } from "api/hackathon";

export const hackathonListSelector = selector({
  key: "hackathonListSelector",
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
