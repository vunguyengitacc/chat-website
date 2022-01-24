import RoomType from "utility/enum";
import { IMember } from "./Member";
import { IMessage } from "./Message";

export interface IRoom {
  id: Number;
  name: string;
  createdDate: Date;
  coverImage: string;
  memberIds: Number[];
  messageIds: Number[];
  lastMessage?: IMessage;
  type: RoomType;
}
