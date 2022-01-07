import { IResponse } from "../model/Common";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const authApi = {
  register(payload: Partial<IUser>): Promise<IResponse<any>> {
    return axiosClient.post("/auth/register", payload);
  },
  login(payload: {
    username: string;
    password: string;
  }): Promise<IResponse<any>> {
    return axiosClient.post("/auth/login", payload);
  },
};

export default authApi;
