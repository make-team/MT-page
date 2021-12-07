import React from "react";
import styled from "styled-components";

import { Div } from "../atoms/Div";
import { Input } from "components/atoms/Input";

export interface PropTypes {
  title: string;
  content: string;
  name: string;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ title, content, name, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    onChange && onChange({ name, value });
  };

  return (
    <InputWrapper>
      <Div>{title}</Div>
      {onChange ? (
        <Input
          name={name}
          defaultValue={content}
          onChange={contentsChange}
        ></Input>
      ) : (
        <Div>{content}</Div>
      )}
    </InputWrapper>
  );
}

export default HackathonDetail;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
