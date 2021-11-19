import axios from "axios";
import { FIELD } from "../constant/input";
import { BASE_URL } from "./baseUrl";

export const list = () =>
  axios.get<
    {
      _id: number;
      hackathon_id: number;
      name: string;
      description: string;
      contact: string;
      start_time: number;
      end_time: number;
      recruiment: {
        field: keyof typeof FIELD;
        skill: string;
        count: number;
      }[];
    }[]
  >(`${BASE_URL}/team`);

export const regist = ({ bodyData }: { bodyData: FormData }) =>
  axios.post(`${BASE_URL}/team`, bodyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const detail = (id: number) =>
  axios.get<{
    _id: number;
    hackathon_id: number;
    name: string;
    description: string;
    contact: string;
    start_time: number;
    end_time: number;
    recruiment: {
      field: keyof typeof FIELD;
      skill: string;
      count: number;
    }[];
  }>(`${BASE_URL}/team/${id}`);
