import { atom, selectorFamily } from "recoil";

import { detail } from "api/hackathon";
import { inHackathon } from "api/team";

interface HackathonDetail {
  id: number;
  title: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  hit: number;
  attachment: {
    s3: string;
    uuid: string;
    name: string;
    size: number;
    content_type: string;
  }[];
  teamList: [];
}

export const detailSelector = selectorFamily({
  key: "DetailSelector",
  get: (id: number) => async () => {
    const { data: hackathonData } = await detail(id);
    const { data: teamData } = await inHackathon(+id);
    return {
      id: hackathonData._id,
      title: hackathonData.title,
      description: hackathonData.description,
      contact: hackathonData.contact,
      hit: hackathonData.hit,
      attachment: hackathonData.attachment.map((imgItem) => ({
        imgUrl: imgItem.s3,
        uuid: imgItem.uuid,
        name: imgItem.name,
        size: imgItem.size,
        contentType: imgItem.content_type,
      })),
      startTime: new Date(hackathonData.start_time),
      endTime: new Date(hackathonData.end_time),
      teamList: teamData.map((item) => ({
        id: item._id,
        hackathonId: item.hackathon_id,
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
      })),
    };
  },
});

export const DetailData = atom<HackathonDetail>({
  key: "DetailData",
  default: {
    id: 0,
    title: "",
    description: "",
    attachment: [],
    contact: "",
    hit: 1,
    startTime: new Date(),
    endTime: new Date(),
    teamList: [],
  },
});
