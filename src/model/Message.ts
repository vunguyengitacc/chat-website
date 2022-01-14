import { IRoom } from "./Room";
import { IUser } from "./User";

export interface IMessage {
  id: Number;
  content: string;
  owner: IUser;
  createdDate: Date;
  type: string;
  roomId: Number;
}
