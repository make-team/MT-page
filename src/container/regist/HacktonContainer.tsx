import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HacktonRegist, {
  HackathonRegist,
  PropTypes as RegistPropTypes,
} from "../../components/template/HacktonRegist";
import SubmitButton from "../../components/template/SubmitButton";

import { regist } from "../../api/hackathon";

function HacktonContainer() {
  const [contents, setContents] = useState({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
  });

  const changeContents = useCallback<RegistPropTypes["onChange"]>(
    ({ name, value }) => {
      setContents({ ...contents, [name]: value });
    },
    [contents]
  );

  const onRegist = async () => {
    let bodyData = new FormData();
    bodyData.append("title", contents.title);
    bodyData.append("description", contents.description);
    bodyData.append("contact", contents.contact);
    bodyData.append("end_time", `${contents.endTime.getTime()}`);
    bodyData.append("start_time", `${contents.startTime.getTime()}`);
    await regist({ bodyData });
  };
  return (
    <Wrapper>
      <Content>
        <HacktonRegist contents={contents} onChange={changeContents} />
      </Content>
      <SubmitButton onCancel={() => {}} onSubmit={onRegist} />
    </Wrapper>
  );
}

export default HacktonContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
`;
