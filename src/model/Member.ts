import { IRole } from "./Role";
import { IRoom } from "./Room";
import { IUser } from "./User";

export interface IMember {
  user: IUser;
  room: IRoom;
  role: IRole;
}
