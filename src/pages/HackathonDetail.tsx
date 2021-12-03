import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import HackathonDetailTamplate, {
  Hackathon,
  PropTypes as HackathonPropTypes,
} from "template/HackathonDetail";
import HackathonTeamCard, { Team } from "template/HackathonTeamCard";

import Popup from "components/organisms/Popup";
import StickyMenu from "components/molecules/StickyMenu";

import { detail, remove, modify } from "api/hackathon";
import { inHackathon } from "api/team";

function HackathonDetail() {
  const location = useLocation();
  const history = useNavigate();
  let id = location.pathname.split("/")[2];

  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

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

  const modifyHackathon = () => {
    setModifyStatus((prev) => !prev);
  };

  const confirmModify = () => {
    onModify();
    setPopup((prev) => !prev);
  };

  const popupClose = () => {
    setPopup((prev) => !prev);
  };

  useEffect(() => {
    updateDetail();
    TeamList();
  }, [updateDetail, TeamList]);

  return (
    <Wrapper>
      <HackathonDetailTamplate
        contents={detailData}
        modifyStatus={modifyStatus}
        onChange={changeContents}
      />
      <HackathonTeamCard items={dataList} />
      <StickyMenu
        onBack={goBackClick}
        onDelete={deleteHackathon}
        onModify={modifyHackathon}
        onTeamRegist={registTeam}
        onSubmitModify={confirmModify}
        modifyStatus={modifyStatus}
      />
      <Popup
        text="수정하시겠습니까?"
        status={popup ? "open" : "close"}
        onCancel={popupClose}
        onModify={onModify}
      />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 90rem;
  margin: 1rem auto;
`;
