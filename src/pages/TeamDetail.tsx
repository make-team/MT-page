import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TeamDetail, {
  PropTypes as TeamPropTypes,
  Team,
} from "template/TeamDetail";

import { detail } from "api/team";

function PersonDetail() {
  const location = useLocation();
  const history = useNavigate();
  let id = location.pathname.split("/");

  const [detailData, setDetailData] = useState<Team>({
    id: 0,
    hackathonId: 0,
    name: "",
    description: "",
    contact: "",
    startTime: new Date(),
    endTime: new Date(),
    recruiment: [],
  });

  const goBackClick = () => {
    history(-1);
  };

  const updateDetail = useCallback(async () => {
    const { data } = await detail(+id);
    setDetailData({
      id: data._id,
      hackathonId: data.hackathon_id,
      name: data.name,
      description: data.description,
      contact: data.contact,
      startTime: new Date(data.start_time),
      endTime: new Date(data.end_time),
      recruiment: data.recruiment.map((item) => ({
        field: item.field,
        count: item.count,
        skill: item.skill,
      })),
    });
  }, [id]);

  const changeContents = useCallback<TeamPropTypes["onChange"]>(
    ({ name, value }) => {
      setDetailData({ ...detailData, [name]: value });
    },
    [detailData]
  );

  useEffect(() => {
    updateDetail();
  }, [updateDetail]);

  return (
    <Wrapper>
      <Title></Title>
      <Contents>
        <TeamDetail
          contents={detailData}
          onChange={changeContents}
          onBack={goBackClick}
        />
      </Contents>
    </Wrapper>
  );
}

export default PersonDetail;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 17fr minmax(0, 66fr) 17fr;
  grid-template-rows: 3rem auto 25px;
  grid-template-areas:
    " . title ."
    " . content ."
    " . . . ";
  max-width: 96%;
  min-height: 100vh;
  margin: 0 auto;
`;

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

const Title = styled.div`
  display: flex;
  grid-area: title;
  align-items: center;
  justify-content: center;
`;
