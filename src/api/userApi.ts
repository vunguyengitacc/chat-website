import { IResponse } from "../model/Common";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const userApi = {
  getById(payload: Pick<IUser, "id">): Promise<IResponse<IUser>> {
    return axiosClient.get(`/users/${payload.id}`);
  },
  getMe(): Promise<IResponse<IUser>> {
    return axiosClient.get("/users/me");
  },
  getMyFriend(): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/users/me/friend");
  },
  updateMe(payload: Partial<IUser>): Promise<IResponse<IUser>> {
    return axiosClient.put("/users/me", payload);
  },
  updatePassword(payload: {
    currentPassword: string;
    newPassword: string;
  }): Promise<IResponse<IUser>> {
    return axiosClient.put("/users/me/password", payload);
  },
  getRequest(): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/users/me/request");
  },
  getWait(): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/users/me/wait");
  },
  sendRequest(payload: Number): Promise<IResponse<any>> {
    return axiosClient.post(`/users/me/request/${payload}`);
  },
  acceptRequest(payload: Number): Promise<IResponse<any>> {
    return axiosClient.put(`/users/me/request/${payload}`);
  },
  denyRequest(payload: Number): Promise<IResponse<any>> {
    return axiosClient.delete(`/users/me/request/${payload}`);
  },
  cancelRequest(payload: Number): Promise<IResponse<any>> {
    return axiosClient.delete(`/users/me/wait/${payload}`);
  },
  removeFriend(payload: Number): Promise<IResponse<any>> {
    return axiosClient.delete(`/users/me/friend/${payload}`);
  },
};

export default userApi;
