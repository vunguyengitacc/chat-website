import { IMember } from "./Member";

export interface IRoom {
  id: Number;
  name: string;
  createdDate: Date;
  coverImage: string;
  memberIds: Number[];
  messageIds: Number[];
}
