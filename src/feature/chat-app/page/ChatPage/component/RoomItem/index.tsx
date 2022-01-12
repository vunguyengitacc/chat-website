import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import useRoomItemStyle, { activeRoomCSS } from "./style";
import { toSimpleString } from "utility/string";
import { NavLink } from "react-router-dom";

interface IProps {
  roomId: string;
}

const RoomItem: React.FC<IProps> = ({ roomId }) => {
  const style = useRoomItemStyle();
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeRoomCSS : {})}
      to={`${roomId}`}
      className={style.surface}
    >
      <Box className={style.roomContent}>
        <Box className={style.avatarField}>
          <Avatar
            sx={{ height: "60px", width: "60px" }}
            children={toSimpleString("Kent Dodds")}
          />
        </Box>

        <Box className={style.roomInfor}>
          <Box className={style.topField}>
            <Box className={style.nameField}>
              <Typography variant="subtitle1">
                <b>Name</b>
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
