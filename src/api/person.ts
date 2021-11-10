import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const personList = axios.get(`${BASE_URL}/person`);
