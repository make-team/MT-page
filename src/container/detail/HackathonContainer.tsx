import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { detail } from "../../api/hackathon";
import HackathonDetail, {
  Hackathon,
} from "../../components/template/HackathonDetail";

interface PropTypes {
  id: string;
}

function HackathonContainer({ id }: PropTypes) {
  const [detailData, setDetailData] = useState<Hackathon>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    hit: 0,
  });

  const updateDetail = useCallback(async () => {
    const { data } = await detail(+id);
    setDetailData({
      title: data.title,
      description: data.description,
      contact: data.contact,
      endTime: new Date(data.end_time),
      startTime: new Date(data.start_time),
      hit: data.hit,
    });
  }, [id]);

  useEffect(() => {
    updateDetail();
  }, [updateDetail]);

  return (
    <Contents>
      <Title>{detailData.title}</Title>
      <HackathonDetail contents={detailData} onChange={() => {}} />
    </Contents>
  );
}

export default HackathonContainer;

const Contents = styled.div`
  grid-area: content;
  padding: 1.5rem;
  & > img {
    height: 100%;
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

const Title = styled.h2`
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: center;
`;
