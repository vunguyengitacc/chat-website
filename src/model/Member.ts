import MemberRole from "utility/enum/memberRole";
import { IRoom } from "./Room";
import { IUser } from "./User";

export interface IMember {
  user: IUser;
  room: IRoom;
  role: MemberRole;
}
