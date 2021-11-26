import axios from "axios";
import URL from "./baseUrl";

export const list = () =>
  axios.get<
    {
      _id: number;
      title: string;
      description: string;
      contact: string;
      attachment: {
        s3: string;
        uuid: string;
        name: string;
        size: number;
        content_type: string;
      }[];
      start_time: number;
      end_time: number;
    }[]
  >(`${URL}/hackathon`);

export const detail = (id: number) =>
  axios.get<{
    _id: number;
    title: string;
    description: string;
    contact: string;
    start_time: number;
    end_time: number;
    hit: number;
    attachment: {
      s3: string;
      uuid: string;
      name: string;
      size: number;
      content_type: string;
    }[];
  }>(`${URL}/hackathon/${id}`);

export const regist = ({ bodyData }: { bodyData: FormData }) =>
  axios.post(`${URL}/hackathon`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const remove = (id: number) => axios.delete(`${URL}/hackathon/${id}`);

export const modify = ({ bodyData }: { bodyData: FormData }, id: number) =>
  axios.put(`${URL}/hackathon/${id}`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
