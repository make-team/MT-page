import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { personListSelector } from "store/personList";

import { INTEREST, STATUS, POSTION } from "constant/checkItems";
import CardImg from "components/common/image/ImgBox";

function PersonCard() {
  const data = useRecoilValue(personListSelector);

  return (
    <Wrapper>
      <TableHeader>
        <div>이름</div>
        <div>핸드폰</div>
        <div>오픈톡방</div>
        <div>활동지역</div>
        <div>역할</div>
      </TableHeader>
      <List>
        {data &&
          data.map((item) => (
            <Card key={item.phone + item.contact + item.name}>
              <Profile>
                <CardImg
                  attachment={item.attachment}
                  width="3rem"
                  height="3rem"
                  radius="50%"
                />
                <div>{item.name}</div>
              </Profile>
              {item.phone && (
                <div>
                  {`${item.phone}`.replace(
                    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
                    "$1-$2-$3"
                  )}
                </div>
              )}
              <div>{item.contact ? item.contact : "등록 안됨"}</div>
              <div>{item.location}</div>
              <div>
                <div>{POSTION[item.position]} 직군의</div>
                <div>{STATUS[item.status]}입니다.</div>
                <div>{INTEREST[item.interest]}</div>
              </div>
            </Card>
          ))}
      </List>
    </Wrapper>
  );
}

export default PersonCard;

const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: inherit;
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
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.textColor};
  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0.8rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }
  & > div {
    flex: 1;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
