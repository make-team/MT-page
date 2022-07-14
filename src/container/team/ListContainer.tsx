import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { teamListSelector } from "store/teamList";

import { FIELD } from "constant/checkItems";

import TeamRecruimentCardList from "components/team/RecruimentCardList";
import CardDeleteButton from "components/common/button/delete";
import DateTerm from "components/common/date/term";

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

interface PropTypes {
  onBack: () => void;
}

function ListContainer({ onBack }: PropTypes) {
  const data = useRecoilValue(teamListSelector);
  const history = useNavigate();

  const onDelete = (id: number) => {
    cardDelete({ id });
    onBack();
  };

  return (
    <List>
      <TableHeader>
        <div>참여 공모전</div>
        <div>기간</div>
        <div>연락처 / 오픈톡방</div>
        <div>구인</div>
      </TableHeader>
      <>
        {data &&
          data.map((item) => (
            <Card key={item.id} onClick={() => history(`/team/${item.id}`)}>
              <ButtonWrapper>
                <CardDeleteButton onClick={onDelete} id={item.id} />
              </ButtonWrapper>
              <ContentsWrapper>
                {item.hackathon && <div>{item.hackathon.title}</div>}
                <DateTermWrapper>
                  <DateTerm startTime={item.startTime} endTime={item.endTime} />
                </DateTermWrapper>
                {item.contact ? <div>{item.contact}</div> : "없음"}
                <TeamRecruimentCardList recruiment={item.recruiment} />
              </ContentsWrapper>
            </Card>
          ))}
      </>
    </List>
  );
}

export default ListContainer;

const List = styled.div`
  margin: 0 auto;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
`;

const TableHeader = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.menu};
  font-size: 0.8rem;
  & > div {
    flex: 1;
    text-align: center;
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.subBackground};
  border-bottom: 1px solid black;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  & > div {
    flex: 1;
    text-align: center;
  }
`;

const DateTermWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
