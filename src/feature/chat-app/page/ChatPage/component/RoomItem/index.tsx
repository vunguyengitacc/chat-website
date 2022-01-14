import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import useRoomItemStyle, { activeRoomCSS } from "./style";
import { toSimpleString } from "utility/string";
import { NavLink } from "react-router-dom";
import { IRoom } from "model/Room";

interface IProps {
  value: IRoom;
}

const RoomItem: React.FC<IProps> = ({ value }) => {
  const style = useRoomItemStyle();
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeRoomCSS : {})}
      to={`${value.id}`}
      className={style.surface}
    >
      <Box className={style.roomContent}>
        <Box className={style.avatarField}>
          <Avatar
            sx={{ height: "60px", width: "60px" }}
            src={
              value.coverImage ??
              `https://avatars.dicebear.com/4.5/api/initials/${value.name}.svg`
            }
          />
        </Box>

        <Box className={style.roomInfor}>
          <Box className={style.topField}>
            <Box className={style.nameField}>
              <Typography variant="subtitle1">
                <b>{value.name}</b>
              </Typography>
            </Box>
            <Box className={style.lastestActionTimeField}>
              <Typography variant="subtitle1">Name</Typography>
            </Box>
          </Box>
          <Box className={style.bottomField}>
            New Message here New Message here New Message here
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};

export default RoomItem;
