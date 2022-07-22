import { useCallback, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { hackathonListSelector } from "store/hackathonList";
import { modalState } from "store/modalStatus";

import RegistContainer from "./RegistContainer";

import Modal from "components/common/modal";
import HackathonCardContent from "components/hackthon/MainCardContent";

import InputModal from "components/common/modal/inputModal";
import Card from "components/common/card/wrapper";

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
  const data = useRecoilValue(hackathonListSelector);

  const [modalStatus, setModalStatus] = useRecoilState<boolean>(modalState);
  const [pass, setPass] = useState<boolean>(false);

  const handleClick = useCallback<PropTypes["goDetail"]>(
    (id) => {
      goDetail(id);
    },
    [goDetail]
  );

  const handleAddClick = () => {
    setPass(false);
    setModalStatus(true);
  };

  const handlePassClick = () => {
    setPass((prev) => !prev);
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
        <Card onClick={handlePassClick}>
          <Add> + </Add>
        </Card>
      </List>
      <InputModal
        open={pass}
        text="비밀번호 입력"
        onSubmit={handleAddClick}
        onClose={handlePassClick}
      />
      <Modal open={modalStatus} content={<RegistContainer />} />
    </>
  );
}

export default ListContainer;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  justify-content: center;
  grid-gap: 1rem;
  background-color: inherit;
`;

const Add = styled.div`
  text-align: center;
  line-height: 20rem;
`;
