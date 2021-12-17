import axios from "axios";
import URL from "./baseUrl";

import { INTEREST, STATUS, POSTION } from "constant/checkItems";

export const list = () =>
  axios.get<
    {
      name: string;
      phone: number;
      contact: string;
      position: keyof typeof POSTION;
      status: keyof typeof STATUS;
      location: string;
      interest: keyof typeof INTEREST;
      attachment: {
        s3: string;
        uuid: string;
        name: string;
        size: number;
        content_type: string;
      }[];
    }[]
  >(`${URL}/person`);

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
  }>(`${URL}/person/${id}`);

export const regist = ({ bodyData }: { bodyData: FormData }) =>
  axios.post(`${URL}/person`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const remove = (id: number) => axios.delete(`${URL}/person/${id}`);

export const modify = ({ bodyData }: { bodyData: FormData }, id: number) =>
  axios.put(`${URL}/person/${id}`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
