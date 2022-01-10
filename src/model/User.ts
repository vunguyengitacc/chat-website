import { IMember } from "./Member";

export interface IUser {
  id: Number;
  username: string;
  password: string;
  name: string;
  email: string;
  avatarURI: string;
  phone: string;
  address: string;
  bio: string;
  members?: IMember[];
  friends?: IUser[];
}
