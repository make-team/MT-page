import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

import DatePicker from "../common/DatePicker";
import ImgUpload from "../common/ImgUpload";
import { Input } from "../common/Input";

export interface HackathonRegist {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  attachment?: File;
}

export interface PropTypes {
  contents: HackathonRegist;
  onChange: ({
    name,
    value,
  }: {
    name: string;
    value: string | Date | File;
  }) => void;
}

function HacktonRegist({ contents, onChange }: PropTypes) {
  const post = useRef<HTMLImageElement>(null);

  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  const preview = useCallback(() => {
    if (contents.attachment && post.current) {
      post.current.src = URL.createObjectURL(contents.attachment);
      post.current.onload = () => {
        URL.revokeObjectURL(
          post.current ? post.current.src : "삭제가 안된거같다..."
        );
      };
    }
  }, [contents.attachment]);

  useEffect(() => {
    preview();
  }, [preview]);

  return (
    <RegistForm>
      <ImgWrapper>
        <PostImg ref={post} />
        <ImgUpload onChange={onChange} />
      </ImgWrapper>
      <div>
        <InputWrapper>
          <div>제목 : </div>
          <Input
            name="title"
            value={contents.title}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>기간 : </div>
          <DatePicker
            onChange={onChange}
            endTime={contents.endTime}
            startTime={contents.startTime}
          />
        </InputWrapper>
        <InputWrapper>
          <div>설명 : </div>
          <Input
            name="description"
            value={contents.description}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>연락처 : </div>
          <Input
            name="contact"
            value={contents.contact}
            onChange={contentsChange}
          ></Input>
        </InputWrapper>
      </div>
    </RegistForm>
  );
}

export default HacktonRegist;

const RegistForm = styled.div`
  grid-area: main;
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div``;

const PostImg = styled.img`
  height: 50vh;
  width: 40vh;
  margin: 1rem;
  background-size: cover;
`;
