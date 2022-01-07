import { IMember } from "./Member";

export interface IUser {
  id: Number;
  username: string;
  email: string;
  avatarURI: string;
  members?: IMember[];
}
