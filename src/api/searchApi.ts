import { IResponse } from "../model/Common";
import { IUser } from "../model/User";
import axiosClient from "./axiosClient";

const searchApi = {
  searchUser(payload: { term: string }): Promise<IResponse<IUser[]>> {
    return axiosClient.get("/search/users", { params: payload });
  },
};

export default searchApi;
