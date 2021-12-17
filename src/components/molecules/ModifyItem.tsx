import React from "react";
import styled from "styled-components";

import { Div } from "../atoms/Div";
import { Input } from "components/atoms/Input";

export interface PropTypes {
  title?: string;
  content: string;
  name: string;
  modifyStatus?: boolean;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({
  title,
  content,
  name,
  modifyStatus,
  onChange,
}: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange && onChange({ name, value });
  };

  return (
    <InputWrapper>
      <Div>{title}</Div>
      {modifyStatus ? (
        <Input
          name={name}
          defaultValue={content}
          onChange={contentsChange}
        ></Input>
      ) : (
        <span>{content}</span>
      )}
    </InputWrapper>
  );
}

export default HackathonDetail;

const InputWrapper = styled.span``;
