import { IMember } from "./Member";

export interface IRoom {
  id: string;
  name: string;
  createdDate: Date;
  members: IMember[];
}
