import React, { useCallback, useEffect, useState } from "react";
import { inHackathon } from "api/team";

import TeamCard, { Team } from "components/template/TeamCard";

interface PropTypes {
  id: number;
}

function HackathonTeamContainer({ id }: PropTypes) {
  const [dataList, setDataList] = useState<Team[]>();
  const updateList = useCallback(async () => {
    const { data } = await inHackathon(id);
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
  }, [id]);

  useEffect(() => {
    updateList();
  }, [updateList]);

  return <TeamCard items={dataList} add={true} toUrl="/team" />;
}

export default HackathonTeamContainer;
