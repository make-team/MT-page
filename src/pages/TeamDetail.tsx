import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TeamDetailTemplate, {
  PropTypes as TeamPropTypes,
  Team,
} from "template/TeamDetail";

import { detail } from "api/team";

function TeamDetail() {
  const location = useLocation();
  const history = useNavigate();
  let id = location.pathname.split("/")[2];

  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<Team>({
    id: 0,
    hackathon: [],
    name: "",
    description: "",
    contact: "",
    startTime: new Date(),
    endTime: new Date(),
    recruiment: [],
  });

  const goBackClick = () => {
    history(-1);
  };

  const updateDetail = useCallback(async () => {
    const { data } = await detail(+id);
    setDetailData({
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
    <Wrapper>
      <Title>팀 상세보기</Title>
      <TeamDetailTemplate
        contents={detailData}
        onChange={changeContents}
        onBack={goBackClick}
        modifyStatus={modifyStatus}
      />
    </Wrapper>
  );
}

export default TeamDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 3rem auto 3rem;
  grid-template-areas:
    " . title ."
    " . content ."
    " . . . ";
  margin: 0 auto;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 2rem;
`;
