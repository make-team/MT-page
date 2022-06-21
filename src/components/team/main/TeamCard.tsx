import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { FIELD } from "constant/checkItems";

import { teamListSelector } from "store/teamList";
import { useNavigate } from "react-router-dom";
import TeamCardContents from "components/team/main/TeamCardContents";
import TeamRecruimentCardList from "components/team/regist/TeamRecruimentCardList";
import { cardDelete } from "api/team";
import CardDeleteButton from "components/common/card/CardDeleteButton";

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
  const data = useRecoilValue(teamListSelector);
  const history = useNavigate();

  const onDelete = (id: number) => {
    cardDelete({ id });
    history("/team");
  };

  return (
    <List>
      {data &&
        data.map((item) => (
          <Card key={item.id} onClick={() => history(`/team/${item.id}`)}>
            <CardDeleteButton onDelete={onDelete} id={item.id} />
            <Wrapper>
              <TeamCardContents
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
  background-color: inherit;
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

const Wrapper = styled.div``;
