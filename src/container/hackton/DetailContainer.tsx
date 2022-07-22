import { useCallback, useState } from "react";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { detailSelector } from "store/hackathonDetail";

import { usePopup } from "hooks/popup";

import HackathonDetailTamplate, {
  PropTypes as HackathonPropTypes,
} from "components/hackthon/Detail";
import HackathonTeamCard from "components/team/MainCard";
import Popup from "components/common/popup";
import ModifyButton from "components/common/button/modify";

import { remove, modify } from "api/hackathon";
import Modal from "components/common/modal";
import RegistContainer from "container/team/RegistContainer";
import { modalState } from "store/modalStatus";

interface PropTypes {
  id: string;
  toBack: () => void;
}

function DetailContainer({ id, toBack }: PropTypes) {
  const data = useRecoilValue(detailSelector(+id));

  const [togglePopup] = usePopup();

  const [modalStatus, setModalStatus] = useRecoilState<boolean>(modalState);

  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
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
    togglePopup();
    onModify();
  };

  const handleTeamAddClick = () => {
    setModalStatus(true);
  };

  return (
    <Wrapper>
      <Title>{`${detailData.title}`}</Title>
      <HackathonDetailTamplate
        contents={detailData}
        img={data.attachment}
        modifyStatus={modifyStatus}
        onChange={changeContents}
      />
      <ButtonWrapper>
        <ModifyButton
          onBack={toBack}
          onDelete={deleteClick}
          onModify={modifyClick}
          onTeamRegist={handleTeamAddClick}
          onSubmitModify={confirmModify}
          modifyStatus={modifyStatus}
        />
      </ButtonWrapper>
      <HackathonTeamCard items={data.teamList} />
      <Modal open={modalStatus} content={<RegistContainer id={id} />} />
      <Popup text="수정하시겠습니까?" />
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
