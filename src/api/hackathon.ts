import axios from "axios";
import { BASE_URL } from "./baseUrl";

import { Hackathon } from "../components/template/HackathonCard";

export const list = () =>
  axios.get<
    {
      _id: number;
      title: string;
      description: string;
      contact: string;
      start_time: number;
      end_time: number;
    }[]
  >(`${BASE_URL}/hackathon`);

export const regist = ({ bodyData }: { bodyData: FormData }) =>
  axios.post(`${BASE_URL}/hackathon`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const remove = (id: number) =>
  axios.delete(`${BASE_URL}/hackathon/${id}`);
