import axios from "axios";
import { FIELD } from "../constant/checkItems";
import URL from "./baseUrl";

export const list = () =>
  axios.get<
    {
      _id: number;
      hackathon: {
        _id: number;
        title: string;
      };
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
  >(`${URL}/team`);

export const inHackathon = (id: number) =>
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
  >(`${URL}/team/hackathon/${id}`);

export const regist = ({ bodyData }: { bodyData: FormData }) =>
  axios.post(`${URL}/team`, bodyData, {
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
  }>(`${URL}/team/${id}`);
