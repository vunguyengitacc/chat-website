import { IResponse } from "../model/Common";
import { IRoom } from "../model/Room";
import axiosClient from "./axiosClient";

const roomApi = {
  create(
    payload: Pick<IRoom, "memberIds" | "name" | "type">
  ): Promise<IResponse<IRoom>> {
    return axiosClient.post("/rooms", payload);
  },
  getMyRooms(): Promise<IResponse<IRoom[]>> {
    return axiosClient.get("/rooms");
  },
  getFriendRoomById(payload: { userId: Number }): Promise<IResponse<IRoom>> {
    return axiosClient.get(`/rooms/friend/${payload.userId}`);
  },
  getById(payload: Pick<IRoom, "id">): Promise<IResponse<IRoom>> {
    return axiosClient.get(`/rooms/${payload.id}`);
  },
  deleteOne(payload: Pick<IRoom, "id">): Promise<IResponse<Number>> {
    return axiosClient.delete(`/rooms/${payload.id}`);
  },
};

export default roomApi;
