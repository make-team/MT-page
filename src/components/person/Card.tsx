import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { personListSelector } from "store/personList";

import { INTEREST, STATUS, POSTION } from "constant/checkItems";
import CardImg from "components/common/ImgBox";

function HackathonCard() {
  const data = useRecoilValue(personListSelector);

  return (
    <div>
      <TableHeader>
        <div></div>
        <div>이름</div>
        <div>연락처</div>
        <div>활동지역</div>
        <div>역할</div>
      </TableHeader>
      <List>
        {data &&
          data.map((item) => (
            <Card key={item.phone + item.contact + item.name}>
              <Info>
                <CardImg
                  attachment={item.attachment}
                  width="3rem"
                  height="3rem"
                  radius="50%"
                />
                <div>{item.name}</div>
                {item.phone && (
                  <div>
                    {`${item.phone}`.replace(
                      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
                      "$1-$2-$3"
                    )}
                  </div>
                )}
                {item.contact && <div>{item.contact}</div>}
                <div>{item.location}</div>
              </Info>
              <Status>
                <div>{POSTION[item.position]} 직군의</div>
                <div>{STATUS[item.status]}입니다.</div>
                <div>{INTEREST[item.interest]}</div>
              </Status>
            </Card>
          ))}
      </List>
    </div>
  );
}

export default HackathonCard;

const List = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: inherit;
`;

const TableHeader = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  height: 5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 1rem 1rem;
  border-radius: 8px;
  background-color: #c3a6a0;
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const Info = styled.div`
  display: flex;
  text-align: left;
  & > div {
    &:first-child {
      margin: 0 1rem 0 0;
    }
  }
`;

const Status = styled.div``;
