import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PersonRegist, {
  PropTypes as PersonRegistPropTypes,
  Person,
} from "template/PersonRegist";
import SubmitButton from "components/common/SubmitButton";

import { regist } from "api/person";

export interface PropTypes {
  onCancel: () => void;
}

function PersonContainer({ onCancel }: PropTypes) {
  const [contents, setContents] = useState<Person>({
    name: "",
    phone: 0,
    contact: "",
    position: 0,
    status: 0,
    location: "",
    interest: 0,
    attachment: undefined,
  });

  const onRegist = async () => {
    let bodyData = new FormData();
    bodyData.append("name", contents.name);
    bodyData.append("phone", `${contents.phone}`);
    bodyData.append("position", `${contents.position}`);
    bodyData.append("contact", contents.contact);
    bodyData.append("status", `${contents.status}`);
    bodyData.append("location", `${contents.location}`);
    bodyData.append("interest", `${contents.interest}`);
    if (contents.attachment) {
      bodyData.append("attachment", contents.attachment);
    }
    await regist({ bodyData });
    onCancel();
  };

  const changeContents = useCallback<PersonRegistPropTypes["onChange"]>(
    ({ name, value }) => {
      setContents({ ...contents, [name]: value });
    },
    [contents]
  );

  return (
    <Wrapper>
      <Content>
        <PersonRegist contents={contents} onChange={changeContents} />
      </Content>
      <SubmitButton onCancel={onCancel} onSubmit={onRegist} />
    </Wrapper>
  );
}

export default PersonContainer;

const Wrapper = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
`;
