import { IMember } from "./Member";

export interface IRoom {
  id: Number;
  name: string;
  createdDate: Date;
  coverImage: string;
  members: Number[];
}
