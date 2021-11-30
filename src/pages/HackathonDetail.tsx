import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import HackathonDetailTamplate, {
  Hackathon,
  PropTypes as HackathonPropTypes,
} from "template/HackathonDetail";
import HackathonTeamCard, { Team } from "template/HackathonTeamCard";

import { detail, remove, modify } from "api/hackathon";
import { inHackathon } from "api/team";

function HackathonDetail() {
  const location = useLocation();
  const history = useNavigate();
  let id = location.pathname.split("/")[2];

  const [detailData, setDetailData] = useState<Hackathon>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    hit: 0,
    attachment: undefined,
  });

  const [dataList, setDataList] = useState<Team[]>();

  const goBackClick = () => {
    history(-1);
  };

  const registTeam = () => {
    history(`${location.pathname}/team/regist`);
  };

  const changeContents = useCallback<HackathonPropTypes["onChange"]>(
    ({ name, value }) => {
      setDetailData({ ...detailData, [name]: value });
    },
    [detailData]
  );

  const onModify = async () => {
    let bodyData = new FormData();
    bodyData.append("title", detailData.title);
    bodyData.append("description", detailData.description);
    bodyData.append("contact", detailData.contact);
    bodyData.append("end_time", `${detailData.endTime.getTime()}`);
    bodyData.append("start_time", `${detailData.startTime.getTime()}`);
    await modify({ bodyData }, +id);
  };

  const updateDetail = useCallback(async () => {
    const { data } = await detail(+id);
    setDetailData({
      title: data.title,
      description: data.description,
      contact: data.contact,
      endTime: new Date(data.end_time),
      startTime: new Date(data.start_time),
      hit: data.hit,
      attachment: data.attachment.map((imgItem) => ({
        imgUrl: imgItem.s3,
        uuid: imgItem.uuid,
        name: imgItem.name,
        size: imgItem.size,
        contentType: imgItem.content_type,
      })),
    });
  }, [id]);

  const TeamList = useCallback(async () => {
    const { data } = await inHackathon(+id);
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

  const deleteHackathon = () => {
    remove(+id);
    goBackClick();
  };

  useEffect(() => {
    updateDetail();
    TeamList();
  }, [updateDetail, TeamList]);

  return (
    <Wrapper>
      <HackathonDetailTamplate
        contents={detailData}
        onBack={goBackClick}
        onRegist={registTeam}
        onModify={onModify}
        onDelete={deleteHackathon}
        onChange={changeContents}
      />
      <HackathonTeamCard items={dataList} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div``;
