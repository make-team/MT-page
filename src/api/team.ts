import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const teamList = axios.get(`${BASE_URL}/team`);
