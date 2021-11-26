import axios from "axios";
import URL from "./baseUrl";

export const personList = axios.get(`${URL}/person`);
