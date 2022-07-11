import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { detailSelector } from "store/teamDetail";

import ModifySubmitButton from "components/common/button/modify";
import TeamDetailTemplate, {
  PropTypes as TeamPropTypes,
  Team,
} from "components/team/Detail";

import { modify } from "api/team";

interface PropTypes {
  id: string;
  toBack: () => void;
  goHackathon: (id: number) => void;
}

function TeamDetail({ id, toBack, goHackathon }: PropTypes) {
  const data = useRecoilValue(detailSelector(+id));

  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<Team>(data);

  const onModify = async () => {
    let bodyData = new FormData();
    bodyData.append("name", detailData.name);
    bodyData.append("description", detailData.description);
    bodyData.append("contact", detailData.contact);
    bodyData.append("end_time", `${detailData.endTime.getTime()}`);
    bodyData.append("start_time", `${detailData.startTime.getTime()}`);
    if (detailData.recruiment) {
      bodyData.append("recruiment", `${detailData.recruiment}`);
    }
    await modify({ bodyData }, +id);
  };

  const changeContents = useCallback<TeamPropTypes["onChange"]>(
    ({ name, value }) => {
      setDetailData({ ...detailData, [name]: value });
    },
    [detailData]
  );

  const modifyTeam = () => {
    setModifyStatus((prev) => !prev);
    detailSelector(+id);
  };

  return (
    <Wrapper>
      <TeamDetailTemplate
        contents={detailData}
        modifyStatus={modifyStatus}
        onChange={changeContents}
        goHackathon={goHackathon}
      />
      <ModifySubmitButton
        onBack={toBack}
        onDelete={() => {}}
        modifyStatus={modifyStatus}
        onModify={modifyTeam}
        onSubmitModify={onModify}
      />
    </Wrapper>
  );
}

export default TeamDetail;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem auto;
`;
