import { selector } from "recoil";

import { list } from "api/person";

export const personListSelector = selector({
  key: "personListSelector",
  get: async () => {
    const { data } = await list();
    return data.map((item) => ({
      name: item.name,
      phone: item.phone,
      contact: item.contact,
      position: item.position,
      status: item.status,
      location: item.location,
      interest: item.interest,
      attachment: item.attachment.map((attachment) => ({
        imgUrl: attachment.s3,
        uuid: attachment.uuid,
        name: attachment.name,
        size: attachment.size,
        contentType: attachment.content_type,
      })),
    }));
  },
});
