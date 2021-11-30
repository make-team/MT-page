import React, { useEffect, useState } from "react";

import TeamCard, { Team } from "template/TeamCard";

import { list } from "api/team";

function CardListTeamContainer() {
  const [dataList, setDataList] = useState<Team[]>();
  const updateList = async () => {
    const { data } = await list();
    setDataList(
      data.map((item) => ({
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
      }))
    );
  };

  useEffect(() => {
    updateList();
  }, []);

  return <TeamCard items={dataList} toUrl="/team" />;
}

export default CardListTeamContainer;
