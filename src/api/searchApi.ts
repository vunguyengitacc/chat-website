import { IResponse } from "../model/Common";
import { IRoom } from "../model/Room";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const searchApi = {
  search(): Promise<IResponse<{ users: IUser[]; rooms: IRoom[] }>> {
    return axiosClient.get("/search");
  },
  searchUser(payload: { term: string }): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/users", { params: payload });
  },
  suggest(): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/users/suggest");
  },
  searchRoom(payload: { term: string }): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/room", { params: payload });
  },
};

export default searchApi;
