import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

import Radio from "components/common/radio/RadioList";

import { INTEREST, STATUS, POSTION } from "constant/checkItems";
import ImgUpload from "components/common/image/ImgUpload";
import { Input } from "components/common/input";
//import CheckButtonList from "components/organisms/CheckButtonList";

export interface Person {
  name: string;
  phone: number;
  contact: string;
  position: keyof typeof POSTION;
  status: keyof typeof STATUS;
  location: string;
  interest: keyof typeof INTEREST;
  attachment?: File;
}

export interface PropTypes {
  contents: Person;
  onChange: ({
    name,
    value,
  }: {
    name: string;
    value: string | Date | File | string[];
  }) => void;
}

function PersonRegist({ contents, onChange }: PropTypes) {
  const post = useRef<HTMLImageElement>(null);
  // const [check, setCheck] = useState([""]);

  const contentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  // const arrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   if (check.includes(value)) {
  //     setCheck((prev) => prev.filter((item) => item !== value));
  //   }
  //   setCheck((prev) => prev.concat(value));
  //   onChange({ name, value: check });
  // };

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
    <div>
      <RegistForm>
        <ImgWrapper>
          <PostImg ref={post} />
          <ImgUpload onChange={onChange} />
        </ImgWrapper>
        <div>
          <InputWrapper>
            <div>이름 : </div>
            <Input
              name="name"
              value={contents.name}
              onChange={contentsChange}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <div>활동 구역 : </div>
            <Input
              name="location"
              value={contents.location}
              onChange={contentsChange}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <div>연락처 : </div>
            <Input
              name="phone"
              value={contents.phone}
              onChange={contentsChange}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <div>상태 : </div>
            <Radio
              name="status"
              list={Object.entries(STATUS)}
              onChange={contentsChange}
            />
          </InputWrapper>
          <InputWrapper>
            <div>관심 분야 : </div>
            <Input name="interest" onChange={contentsChange} />
          </InputWrapper>
          <InputWrapper>
            <div>전문 분야 : </div>
            <Radio
              name="position"
              list={Object.entries(POSTION)}
              onChange={contentsChange}
            />
          </InputWrapper>
        </div>
      </RegistForm>
    </div>
  );
}

export default PersonRegist;

const RegistForm = styled.div`
  display: flex;
  grid-area: main;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  & > div:first-child {
    height: 12.625rem;
    width: 13.375rem;
    background-color: green;
    margin: 1rem;
  }
`;

const PostImg = styled.img`
  height: 50vh;
  width: 40vh;
  margin: 1rem;
  background-size: cover;
`;
