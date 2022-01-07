import { IRoom } from "./Room";
import { IUser } from "./User";

export interface IMessage {
  id: Number;
  content: string;
  room: IRoom;
  owner: IUser;
  createdDate: Date;
  typeId: Number;
}
