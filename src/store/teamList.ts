import { atom, selector } from "recoil";
import { FIELD } from "constant/checkItems";

import { list } from "api/team";
interface Team {
  id: number;
  hackathon: {
    id: number;
    title: string;
  };
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

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

export const teamListState = atom<Array<Team>>({
  key: "item",
  default: [
    {
      id: 0,
      hackathon: {
        id: 0,
        title: "",
      },
      name: "",
      description: "",
      contact: "",
      startTime: new Date(),
      endTime: new Date(),
      recruiment: [],
    },
  ],
});
