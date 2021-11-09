import React from "react";
import styled from "styled-components";

export interface PropTypes {
  onChange: (file: File) => void;
}

function ImgUpload({ onChange }: PropTypes) {
  const imgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) onChange(files[0]);
  };

  return (
    <Wrapper>
      <label htmlFor="chooseFile">📸 사진 업로드</label>
      <input
        type="file"
        id="chooseFile"
        accept="'.png, .jpg, .jpeg, .pdf"
        placeholder=".png, .jpg, .jpeg, .pdf"
        onChange={(img) => imgUpload(img)}
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
