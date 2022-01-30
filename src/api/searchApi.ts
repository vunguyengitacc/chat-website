import { IResponse } from "../model/Common";
import { IRoom } from "../model/Room";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const searchApi = {
  search(payload: {
    term: string;
  }): Promise<IResponse<{ users: IUser[]; rooms: IRoom[] }>> {
    return axiosClient.get("/search", { params: payload });
  },
  searchUser(payload: { term: string }): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/users", { params: payload });
  },
  suggest(): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/users/suggest");
  },
  searchRoom(payload: { term: string }): Promise<IResponse<IRoom[]>> {
    return axiosClient.get("/search/rooms", { params: payload });
  },
};

export default searchApi;
