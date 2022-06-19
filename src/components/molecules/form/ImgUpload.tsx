import React from "react";
import styled from "styled-components";
import { Input } from "../../common/Input";

export interface PropTypes {
  onChange: ({ name, value }: { name: string; value: File }) => void;
}

function ImgUpload({ onChange }: PropTypes) {
  const imgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) onChange({ name, value: files[0] });
  };

  return (
    <Wrapper>
      <label htmlFor="chooseFile">📸 사진 업로드</label>
      <Input
        type="file"
        id="chooseFile"
        name="attachment"
        accept="'.png, .jpg, .jpeg, .pdf"
        placeholder=".png, .jpg, .jpeg, .pdf"
        onChange={imgUpload}
      />
    </Wrapper>
  );
}

export default ImgUpload;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > label {
    cursor: pointer;
  }
  & > input {
    visibility: hidden;
  }
`;
