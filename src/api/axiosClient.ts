import axios from "axios";
import queryString from "query-string";
import { IParams } from "../model/Common";

const axiosClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API
      : `http://localhost:8080/`,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params: Partial<IParams>) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response || error.message)
);

axiosClient.interceptors.response.use(
  (response: any) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data.message ?? error.response);
  }
);

export default axiosClient;
