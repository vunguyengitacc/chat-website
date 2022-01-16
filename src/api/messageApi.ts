import { IResponse } from "../model/Common";
import { IMessage } from "../model/Message";
import { IRoom } from "../model/Room";
import axiosClient from "./axiosClient";

const messageApi = {
  getByRoom(payload: Pick<IRoom, "id">): Promise<IResponse<IMessage[]>> {
    return axiosClient.get(`/messages/room/${payload.id}`);
  },
  create(payload: {
    content: string;
    roomId: string;
  }): Promise<IResponse<IMessage>> {
    return axiosClient.post("/messages", payload);
  },
};

export default messageApi;
