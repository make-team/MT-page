import { atom, selectorFamily } from "recoil";

import { detail } from "api/team";
import { FIELD } from "constant/checkItems";

interface TeamDetail {
  id: number;
  hackathon: {
    id: number;
    name: string;
  }[];
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: {
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }[];
}

export const detailSelector = selectorFamily({
  key: "DetailSelector",
  get: (id: number) => async () => {
    const { data } = await detail(id);
    return {
      id: data._id,
      hackathon: data.hackathon.map((item) => ({
        id: item._id,
        title: item.name,
      })),
      name: data.name,
      description: data.description,
      contact: data.contact,
      startTime: new Date(data.start_time),
      endTime: new Date(data.end_time),
      recruiment: data.recruiment.map((item) => ({
        field: item.field,
        count: item.count,
        skill: item.skill,
      })),
    };
  },
});

export const DetailData = atom<TeamDetail>({
  key: "DetailData",
  default: {
    id: 0,
    hackathon: [],
    name: "",
    description: "",
    contact: "",
    startTime: new Date(),
    endTime: new Date(),
    recruiment: [],
  },
});
