import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { remove, modify } from "api/hackathon";

import { useRecoilValue } from "recoil";
import { ImgType, ImgState } from "recoil/hackathonImg";

import HackathonDetailTamplate, {
  PropTypes as HackathonPropTypes,
} from "components/hackthon/Detail";
import HackathonTeamCard from "components/team/MainCard";
import Popup from "components/common/popup/Popup";
import ModifyButton from "components/common/button/modify";

import { detailSelector } from "store/hackathonDetail";

interface PropTypes {
  id: string;
  toRegistTeam: () => void;
  toBack: () => void;
}

function DetailContainer({ id, toBack, toRegistTeam }: PropTypes) {
  const data = useRecoilValue(detailSelector(+id));

  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  const img = useRecoilValue<ImgType>(ImgState);
  const [detailData, setDetailData] = useState(data);

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

  const deleteClick = () => {
    remove(+id);
  };

  const modifyClick = () => {
    setModifyStatus((prev) => !prev);
    detailSelector(+id);
  };

  const confirmModify = () => {
    setPopup((prev) => !prev);
    onModify();
  };

  const popupClose = () => {
    setPopup((prev) => !prev);
  };

  return (
    <Wrapper>
      <Title>{`${detailData.title}`}</Title>
      <HackathonDetailTamplate
        contents={detailData}
        img={img.attachment}
        modifyStatus={modifyStatus}
        onChange={changeContents}
      />
      <ButtonWrapper>
        <ModifyButton
          onBack={toBack}
          onDelete={deleteClick}
          onModify={modifyClick}
          onTeamRegist={toRegistTeam}
          onSubmitModify={confirmModify}
          modifyStatus={modifyStatus}
        />
      </ButtonWrapper>
      <HackathonTeamCard items={data.teamList} />
      <Popup
        text="수정하시겠습니까?"
        status={popup ? "open" : "close"}
        onCancel={popupClose}
        onSubmit={confirmModify}
      />
    </Wrapper>
  );
}

export default DetailContainer;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
