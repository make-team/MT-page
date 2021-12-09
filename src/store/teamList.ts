import { selector } from "recoil";

import { list } from "api/team";

export const teamListSelector = selector({
  key: "teamListSelector",
  get: async () => {
    const { data } = await list();
    return data.map((item) => ({
      id: item._id,
      hackathon: {
        id: item.hackathon._id,
        title: item.hackathon.title,
      },
      name: item.name,
      description: item.description,
      contact: item.contact,
      endTime: new Date(item.end_time),
      startTime: new Date(item.start_time),
      recruiment: item.recruiment.map((team) => ({
        field: team.field,
        skill: team.skill,
        count: team.count,
      })),
    }));
  },
});
