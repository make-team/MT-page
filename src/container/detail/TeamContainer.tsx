import React, { useCallback, useEffect, useState } from "react";

import TeamDetail, {
  PropTypes as TeamPropTypes,
  Team,
} from "../../components/template/TeamDetail";
import { detail } from "../../api/team";
import SubmitButton from "../../components/template/SubmitButton";

interface PropTypes {
  id: string;
  onBack: () => void;
}

function CardListTeamContainer({ id, onBack }: PropTypes) {
  const [detailData, setDetailData] = useState<Team>({
    id: 0,
    hackathonId: 0,
    name: "",
    description: "",
    contact: "",
    startTime: new Date(),
    endTime: new Date(),
    recruiment: [],
  });

  const updateDetail = useCallback(async () => {
    const { data } = await detail(+id);
    setDetailData({
      id: data._id,
      hackathonId: data.hackathon_id,
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
    });
  }, [id]);

  const changeContents = useCallback<TeamPropTypes["onChange"]>(
    ({ name, value }) => {
      setDetailData({ ...detailData, [name]: value });
    },
    [detailData]
  );

  useEffect(() => {
    updateDetail();
  }, [updateDetail]);

  return (
    <>
      <TeamDetail contents={detailData} onChange={changeContents} />
      <SubmitButton onCancel={onBack} />
    </>
  );
}

export default CardListTeamContainer;
