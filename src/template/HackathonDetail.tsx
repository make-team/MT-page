import React, { useCallback, useState } from "react";
import styled from "styled-components";

import HackathonDetailContents, {
  PropTypes as DetailContentsPropTypes,
} from "components/organisms/HackathonDetailContents";
import Popup from "components/organisms/Popup";
import StickyMenu from "components/molecules/StickyMenu";

export interface Hackathon {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  hit: number;
  attachment?: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
}

export interface PropTypes {
  contents: Hackathon;
  onBack: () => void;
  onRegist: () => void;
  onModify: () => void;
  onDelete: () => void;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({
  contents,
  onChange,
  onRegist,
  onModify,
  onDelete,
  onBack,
}: PropTypes) {
  const [modifyStatus, setModifyStatus] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
  const contentsChange = useCallback<
    Exclude<DetailContentsPropTypes["onChange"], undefined>
  >(
    ({ name, value }) => {
      onChange({ name, value });
    },
    [onChange]
  );

  const modifyHackathon = () => {
    setModifyStatus((prev) => !prev);
  };

  const confirmModify = () => {
    onModify();
    setPopup((prev) => !prev);
  };

  const registTeam = () => {
    onRegist();
  };

  const popupClose = () => {
    setPopup((prev) => !prev);
  };

  return (
    <Wrapper>
      <HackathonDetailContents
        description={contents.description}
        contact={contents.contact}
        startTime={contents.startTime}
        endTime={contents.endTime}
        attachment={contents.attachment}
        onChange={modifyStatus ? undefined : contentsChange}
      />
      <StickyMenu
        onBack={onBack}
        onDelete={onDelete}
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
  grid-area: main;
`;
