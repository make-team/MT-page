import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HacktonRegist, {
  HackathonRegist,
  PropTypes as RegistPropTypes,
} from "template/HacktonRegist";
import SubmitButton from "template/SubmitButton";

import { regist } from "api/hackathon";

export interface PropTypes {
  onCancel: () => void;
}

function HacktonContainer({ onCancel }: PropTypes) {
  const [contents, setContents] = useState<HackathonRegist>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    attachment: undefined,
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
    if (contents.attachment) {
      bodyData.append("attachment", contents.attachment);
    }
    await regist({ bodyData });
    onCancel();
  };
  return (
    <Wrapper>
      <Content>
        <HacktonRegist contents={contents} onChange={changeContents} />
      </Content>
      <ButtonWrapper>
        <SubmitButton onCancel={onCancel} onSubmit={onRegist} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default HacktonContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;
