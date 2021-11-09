import React from "react";

export interface PropTypes {
  onChange: (file: File) => void;
}

function ImgUpload({ onChange }: PropTypes) {
  const imgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) onChange(files[0]);
  };
  return (
    <form>
      <label htmlFor="chooseFile">👉 CLICK HERE! 👈</label>
      <input
        type="file"
        name="chooseFile"
        accept="'.png, .jpg, .jpeg, .pdf"
        placeholder=".png, .jpg, .jpeg, .pdf"
        onChange={(img) => imgUpload(img)}
      />
    </form>
  );
}

export default ImgUpload;
