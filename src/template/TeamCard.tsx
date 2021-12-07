import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { FIELD } from "constant/checkItems";
// import CardImg from "components/molecules/ImgBox";
// import { ImgState } from "recoil/hackathonImg";
// import { ImgType } from "recoil/hackathonImg";

import { teamListSelector } from "store/teamList";
import { useNavigate } from "react-router-dom";
import TeamCardContents from "components/organisms/TeamCardContents";
import TeamRecruimentCardList from "components/organisms/TeamRecruimentCardList";

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
  return (
    <List>
      {data &&
        data.map((item) => (
          <Card key={item.id} onClick={() => history(`/team/${item.id}`)}>
            <Wrapper>
              <TeamCardContents
                id={item.id}
                name={item.name}
                hackathon={item.hackathon}
                contact={item.contact}
                startTime={item.startTime}
                endTime={item.endTime}
              />
              <TeamRecruimentCardList recruiment={item.recruiment} />
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
    margin: 2rem;
  }
`;

const Card = styled.div`
  cursor: pointer;
  font-size: 0.7rem;
  width: 30rem;
  height: 10rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #c3a6a0;
  border-radius: 8px;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div``;
