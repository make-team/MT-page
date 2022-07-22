import React from "react";
import styled from "styled-components";
import { Input } from "../input";

export interface PropTypes {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImgUpload({ onChange }: PropTypes) {
  return (
    <Wrapper>
      <Upload htmlFor="chooseFile">📸 사진 업로드</Upload>
      <Input
        type="file"
        id="chooseFile"
        name="attachment"
        accept="'.png, .jpg, .jpeg, .pdf"
        placeholder=".png, .jpg, .jpeg, .pdf"
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default ImgUpload;

const Wrapper = styled.div`
  height: 2rem;
  & > input {
    visibility: hidden;
  }
`;

const Upload = styled.label`
  cursor: pointer;
`;
