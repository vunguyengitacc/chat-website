import { Avatar, Box, Typography } from "@mui/material";
import { IUser } from "model/User";
import React from "react";
import { NavLink } from "react-router-dom";
import useFriendItemStyle, { activeFriendCSS } from "./style";

interface IProps {
  value: IUser;
}

const FriendItem: React.FC<IProps> = ({ value }) => {
  const style = useFriendItemStyle();
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeFriendCSS : {})}
      className={style.surface}
      to={value.id.toString()}
    >
      <>
        <Avatar className={style.avatar} src={value.avatarURI} />
        <Typography variant="h6">{value.name}</Typography>
      </>
    </NavLink>
  );
};

export default FriendItem;
