import { IResponse } from "model/Common";
import { IRoom } from "model/Room";
import axiosClient from "./axiosClient";
import { IMember } from "model/Member";

const memberApi = {
  getByRoom(payload: Pick<IRoom, "id">): Promise<IResponse<IMember[]>> {
    return axiosClient.get(`/members/room/${payload.id}`);
  },
};

export default memberApi;
