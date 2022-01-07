import { IResponse } from "../model/Common";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const userApi = {
  search(payload: { term: string }): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/users/search", { params: payload });
  },
  getById(payload: Pick<IUser, "id">): Promise<IResponse<IUser>> {
    return axiosClient.get(`/users/${payload.id}`);
  },
  getMe(): Promise<IResponse<IUser>> {
    return axiosClient.get("/users/me");
  },
  updateMe(payload: Partial<IUser>): Promise<IResponse<IUser>> {
    return axiosClient.put("/users/me", payload);
  },
};

export default userApi;
