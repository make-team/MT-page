import React from "react";
import Card from "components/UI/molecules/layout/Card";
import styled from "styled-components";

import emptyImg from "image/emptyImg.png";

export interface Hackathon {
  id: number;
  title: string;
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

export interface PropTypes {
  items?: Hackathon[];
  add?: boolean;
  toUrl?: string;
}

function HackathonCard({ items, add, toUrl }: PropTypes) {
  return (
    <List>
      {items &&
        items.map((item) => (
          <Card
            height="35rem"
            width="20rem"
            toUrl={`${toUrl}/${item.id}`}
            key={item.id}
          >
            <CardContentWrapper>
              {item.attachment.length > 0 ? (
                item.attachment.map(
                  (item) =>
                    item && <ImgWrapper key={item.uuid} imgUrl={item.imgUrl} />
                )
              ) : (
                <img src={emptyImg} alt="empty" width="100%" height="62.75%" />
              )}

              <Contents>
                <div>
                  <h3>제목 : </h3>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <div>설명 : </div>
                  <div>{item.description}</div>
                </div>
                <div>
                  <div>연락처 : </div>
                  <div>{item.contact}</div>
                </div>
                <div>
                  <div>기간 : </div>
                  <div>
                    {`${item.startTime.getFullYear()}년` +
                      `${item.startTime.getMonth()}월` +
                      `${item.startTime.getDay()}일`}
                  </div>
                  <div> ~ </div>
                  <div>
                    {`${item.endTime.getFullYear()}년` +
                      `${item.endTime.getMonth()}월` +
                      `${item.endTime.getDay()}일`}
                  </div>
                  <div>
                    {"(" +
                      parseInt(
                        `${
                          (item.endTime.getTime() - item.startTime.getTime()) /
                          (24 * 60 * 60 * 1000)
                        }`
                      ) +
                      "일간" +
                      ")"}
                  </div>
                </div>
              </Contents>
            </CardContentWrapper>
          </Card>
        ))}
      {add && (
        <Card toUrl={`${toUrl}/regist`}>
          <div> 등록하기 </div>
        </Card>
      )}
    </List>
  );
}

export default HackathonCard;

const List = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  align-content: stretch;
  flex-wrap: wrap;
  background-color: #f7f1f0;
  & > div {
    margin: 1rem 1rem;
  }
`;

const CardContentWrapper = styled.div`
  height: 100%;
  & > div {
    flex: 1;
  }
`;

const ImgWrapper = styled.div<{ imgUrl: string }>`
  margin-bottom: 1rem;
  width: 20rem;
  height: 22rem;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Contents = styled.div`
  padding: 0.5rem 0;
  height: 35%;
  & > div {
    display: flex;
    color: black;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
