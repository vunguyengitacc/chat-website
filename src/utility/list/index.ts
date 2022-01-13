import { IUser } from "model/User";
import { FlexObject } from "utility/flex-object";

export const listUserGroupByFirstChar = (input: IUser[]) => {
  let arr = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
  let rs: FlexObject<IUser> = arr.reduce((a, v) => ({ ...a, [v]: [] }), {});
  rs["Other"] = [];
  console.log(rs);
  const regEx = new RegExp("[A-Z]");
  input.forEach((item) => {
    if (regEx.test(item.name.toUpperCase().split("")[0])) {
      rs[item.name.toUpperCase().split("")[0]].push(item);
    } else rs["Other"]?.push(item);
  });
  return rs;
};
