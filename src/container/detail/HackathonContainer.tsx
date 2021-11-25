import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { detail, remove, modify } from "../../api/hackathon";
import Popup from "../../components/base/Popup";
import StickyMenu from "../../components/common/StickyMenu";
import HackathonDetail, {
  Hackathon,
  PropTypes as HackathonPropTypes,
} from "../../components/template/HackathonDetail";

interface PropTypes {
  id: string;
  onBack: () => void;
}

function HackathonContainer({ id, onBack }: PropTypes) {
  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<Hackathon>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    hit: 0,
    attachment: undefined,
  });

  const [popup, setPopup] = useState<boolean>(false);

  const popupClose = () => {
    setPopup((prev) => !prev);
  };

  const deleteHackathon = () => {
    remove(+id);
    onBack();
  };

  const modifyHackathon = () => {
    setModifyStatus((prev) => !prev);
  };

  const confirmModify = () => {
    setPopup((prev) => !prev);
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
    setPopup((prev) => !prev);
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

  useEffect(() => {
    updateDetail();
  }, [updateDetail]);

  return (
    <Contents>
      <Title>{detailData.title}</Title>
      <HackathonDetail
        contents={detailData}
        onChange={changeContents}
        modifyStatus={modifyStatus}
      />
      <StickyMenu
        onBack={onBack}
        onDelete={deleteHackathon}
        onModify={modifyHackathon}
        onSubmitModify={confirmModify}
        modifyStatus={modifyStatus}
      />
      <Popup
        text="수정하시겠습니까?"
        status={popup ? "open" : "close"}
        onCancel={popupClose}
        onModify={onModify}
      />
    </Contents>
  );
}

export default HackathonContainer;

const Contents = styled.div`
  grid-area: content;
  padding: 1.5rem;
  & > img {
    height: 100%;
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

const Title = styled.h2`
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: center;
`;
