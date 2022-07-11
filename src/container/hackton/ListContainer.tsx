import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { boardListSelector } from "store/hackathonList";
import { modalState } from "store/modalStatus";

import { HackathonRegist } from "components/hackthon/Regist";
import { PropTypes as RegistPropsTypes } from "./RegistContainer";

import HackathonCardContent from "components/hackthon/MainCardContent";
import Modal from "components/common/modal";

import RegistContainer from "./RegistContainer";

import { regist } from "api/hackathon";
import Button from "components/common/button/normal";
import Loading from "components/common/loading/Loading";

export interface Hackathon {
  id: number;
  title: string;
  hit: number;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  attachment: {
    imgUrl: string;
    uuid: string;
    name: string;
    size: number;
    contentType: string;
  }[];
}

interface PropTypes {
  goDetail: (id: number) => void;
}

function ListContainer({ goDetail }: PropTypes) {
  const data = useRecoilValue(boardListSelector);
  const [modalStatus, setModalStatus] = useRecoilState<boolean>(modalState);

  const [inputValue, setInputValue] = useState<HackathonRegist>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    attachment: undefined,
  });

  const handleClick = useCallback<PropTypes["goDetail"]>(
    (id) => {
      goDetail(id);
    },
    [goDetail]
  );

  const onRegist = async () => {
    let bodyData = new FormData();
    bodyData.append("title", inputValue.title);
    bodyData.append("description", inputValue.description);
    bodyData.append("contact", inputValue.contact);
    bodyData.append("end_time", `${inputValue.endTime.getTime()}`);
    bodyData.append("start_time", `${inputValue.startTime.getTime()}`);
    if (inputValue.attachment) {
      bodyData.append("attachment", inputValue.attachment);
    }
    await regist({ bodyData });
  };

  const changeContents = useCallback<RegistPropsTypes["onChange"]>(
    ({ name, value }) => {
      setInputValue({ ...inputValue, [name]: value });
    },
    [inputValue]
  );

  const handleCloseClick = () => {
    setModalStatus(false);
  };

  const handleSubmitClick = () => {
    // onRegist();
    setModalStatus(false);
  };

  const handleAddClick = () => {
    setModalStatus(true);
  };

  return (
    <>
      <List>
        {data &&
          data.map((item) => (
            <div key={item.id} onClick={() => handleClick(item.id)}>
              <HackathonCardContent
                title={item.title}
                hit={item.hit}
                cardImg={item.attachment}
                endTime={item.endTime}
                startTime={item.startTime}
                contact={item.contact}
                description={item.description}
              />
            </div>
          ))}
        <Button onClick={handleAddClick}> + </Button>
      </List>
      <Modal
        open={modalStatus}
        onSubmit={handleSubmitClick}
        onClose={handleCloseClick}
        content={
          <RegistContainer inputValue={inputValue} onChange={changeContents} />
        }
      />
    </>
  );
}

export default ListContainer;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
  grid-gap: 1rem;
  background-color: inherit;
`;
