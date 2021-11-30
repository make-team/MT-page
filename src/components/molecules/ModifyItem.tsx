import React from "react";
import styled from "styled-components";

import { Div } from "../atoms/Div";
import { Input } from "components/atoms/Input";

export interface PropTypes {
  title: string;
  content: string;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ title, content, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange && onChange({ name, value });
  };

  return (
    <InputWrapper>
      <Div>{title}</Div>
      {onChange ? (
        <Div>{content}</Div>
      ) : (
        <Input value={content} onChange={contentsChange}></Input>
      )}
    </InputWrapper>
  );
}

export default HackathonDetail;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
