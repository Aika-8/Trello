import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://321023fd59d5f2fb.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
