import React from "react";
import styled from "styled-components";

import { Input } from "components/common/input";

export interface PropTypes {
  title?: string;
  content: string;
  name: string;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetail({ title, content, name, onChange }: PropTypes) {
  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange && onChange({ name, value });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      {onChange ? (
        <Input
          name={name}
          defaultValue={content}
          onChange={contentsChange}
        ></Input>
      ) : (
        <Content>{content}</Content>
      )}
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 1rem;
`;

const Content = styled.div`
  margin-bottom: 2rem;
`;
