import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilRefresher_UNSTABLE, useSetRecoilState } from "recoil";

import { hackathonListSelector } from "store/hackathonList";

import { Input } from "components/common/input";
import DatePicker from "components/common/date/stardEnd";
import ImgUpload from "components/common/image/ImgUpload";
import SubmitButton from "components/common/button/submit";
import useLoading from "hooks/loading";
import { modalState } from "store/modalStatus";
import { regist } from "api/hackathon";
import { usePopup } from "hooks/popup";
import Popup from "components/common/popup";
import Loading from "components/common/loading/stateLoading";

export interface HackathonRegist {
  title: string;
  description: string;
  contact: string;
  endTime: Date;
  startTime: Date;
  attachment?: File;
}

function HacktonRegist() {
  const post = useRef<HTMLImageElement>(null);
  const refresh = useRecoilRefresher_UNSTABLE(hackathonListSelector);
  const setModalStatus = useSetRecoilState<boolean>(modalState);
  const [setLoading] = useLoading();
  const [togglePopup] = usePopup();

  const [inputValue, setInputValue] = useState<HackathonRegist>({
    title: "",
    description: "",
    contact: "",
    endTime: new Date(),
    startTime: new Date(),
    attachment: undefined,
  });

  const onRegist = async () => {
    try {
      setLoading(true);
      let bodyData = new FormData();
      bodyData.append("title", inputValue.title);
      bodyData.append("description", inputValue.description);
      bodyData.append("contact", inputValue.contact);
      bodyData.append("end_time", `${inputValue.endTime.getTime()}`);
      bodyData.append("start_time", `${inputValue.startTime.getTime()}`);
      if (inputValue.attachment) {
        bodyData.append("attachment", inputValue.attachment);
      }
      await regist({ bodyData });
      refresh();
    } catch {
      togglePopup();
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onDataChange = ({
    name,
    value,
  }: {
    name: string;
    value: string | Date;
  }) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const onClose = () => {
    setModalStatus(false);
    setInputValue({
      title: "",
      description: "",
      contact: "",
      endTime: new Date(),
      startTime: new Date(),
      attachment: undefined,
    });
  };

  const onSubmit = () => {
    onRegist();
    setInputValue({
      title: "",
      description: "",
      contact: "",
      endTime: new Date(),
      startTime: new Date(),
      attachment: undefined,
    });
    setModalStatus(false);
  };

  const preview = useCallback(() => {
    if (inputValue.attachment && post.current) {
      post.current.src = URL.createObjectURL(inputValue.attachment);
      post.current.onload = () => {
        URL.revokeObjectURL(`${post.current}`);
      };
    }
  }, [inputValue.attachment]);

  useEffect(() => {
    preview();
  }, [preview]);

  return (
    <Wrapper>
      <ImgWrapper>
        <PostImg ref={post} />
        <ImgUpload onChange={onChange} />
      </ImgWrapper>
      <div>
        <InputWrapper>
          <div>제목 : </div>
          <Input
            name="title"
            value={inputValue.title}
            onChange={onChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>기간 : </div>
          <DatePicker
            onChange={onDataChange}
            endTime={inputValue.endTime}
            startTime={inputValue.startTime}
          />
        </InputWrapper>
        <InputWrapper>
          <div>설명 : </div>
          <Input
            name="description"
            value={inputValue.description}
            onChange={onChange}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <div>연락처 : </div>
          <Input
            name="contact"
            value={inputValue.contact}
            onChange={onChange}
          ></Input>
        </InputWrapper>
        <SubmitButton onCancel={onClose} onSubmit={onSubmit} />
      </div>
      <Loading />
      <Popup text="등록 오류" />
    </Wrapper>
  );
}

export default HacktonRegist;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 0.6rem;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;

const PostImg = styled.img`
  height: 50vh;
  width: 40vh;
  margin: 1rem;
  background-size: cover;
  @media (max-width: 700px) {
    height: 40vh;
    width: 30vh;
  }
`;
