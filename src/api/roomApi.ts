import { IResponse } from "../model/Common";
import { IRoom } from "../model/Room";
import axiosClient from "./axiosClient";

const roomApi = {
  create(payload: IRoom): Promise<IResponse<IRoom>> {
    return axiosClient.post("/rooms", payload);
  },
  getAll(): Promise<IResponse<IRoom[]>> {
    return axiosClient.get("/rooms");
  },
  getById(payload: Pick<IRoom, "id">): Promise<IResponse<IRoom>> {
    return axiosClient.get(`/rooms/${payload.id}`);
  },
  search(payload: any): Promise<IResponse<IRoom[]>> {
    return axiosClient.get("/rooms/search", { params: payload });
  },
  deleteOne(payload: Pick<IRoom, "id">): Promise<IResponse<Number>> {
    return axiosClient.delete(`/rooms/${payload.id}`);
  },
};

export default roomApi;
