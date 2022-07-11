import React from "react";
import styled from "styled-components";
import RegistForm, { HackathonRegist } from "components/hackthon/Regist";

export interface PropTypes {
  inputValue: HackathonRegist;
  onChange: ({
    name,
    value,
  }: {
    name: string;
    value: string | Date | File;
  }) => void;
}

function RegistContainer({ inputValue, onChange }: PropTypes) {
  return (
    <Wrapper>
      <RegistForm contents={inputValue} onChange={onChange} />
    </Wrapper>
  );
}

export default RegistContainer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
