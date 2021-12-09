import React, { useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { FIELD } from "constant/checkItems";
// import CardImg from "components/molecules/ImgBox";
// import { ImgState } from "recoil/hackathonImg";
// import { ImgType } from "recoil/hackathonImg";

import { teamListSelector } from "store/teamList";
import { useNavigate } from "react-router-dom";
import TeamCardContents from "components/organisms/TeamCardContents";
import TeamRecruimentCardList from "components/organisms/TeamRecruimentCardList";
import { cardDelete } from "api/team";

export interface Team {
  id: number;
  hackathon: {
    id: number;
    title: string;
  };
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

function TeamCard() {
  // const img = useRecoilValue<ImgType>(ImgState);
  const data = useRecoilValue(teamListSelector);
  const history = useNavigate();

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const onDelete = (id: number) => {
    cardDelete({ id });
  };

  return (
    <List>
      {data &&
        data.map((item) => (
          <Card key={item.id} onClick={() => history(`/team/${item.id}`)}>
            <DeleteButton onClick={onClick}>
              <button onClick={() => onDelete(item.id)}>삭제</button>
            </DeleteButton>
            <Wrapper>
              <TeamCardContents
                name={item.name}
                hackathon={item.hackathon}
                contact={item.contact}
                startTime={item.startTime}
                endTime={item.endTime}
              />
              <TeamRecruimentCardList
                heightLimit={true}
                recruiment={item.recruiment}
              />
            </Wrapper>
          </Card>
        ))}
    </List>
  );
}

export default TeamCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  background-color: #f7f1f0;
  flex-wrap: wrap;
  & > div {
    margin: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 0.7rem;
  width: 25rem;
  height: min-content;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #c3a6a0;
  border-radius: 8px;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 0;
`;

const Wrapper = styled.div``;
